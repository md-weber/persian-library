import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { storage, db } from "@/repositories/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useNotification } from "@/composables/useNotification";

const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export function useBookForm(initialBook = null) {
  const { t } = useI18n();
  const { notify } = useNotification();

  const book = ref(
    initialBook || {
      title: "",
      author: "",
      translator: "",
      illustrator: "",
      age: "",
      description: "",
      coverImage: "",
      isAvailable: true,
      ownerId: "",
      borrowerId: null,
    },
  );

  const uploadProgress = ref(0);
  const isUploading = computed(() => {
    return uploadProgress.value > 0 && uploadProgress.value < 100;
  });

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Check file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      notify.warning(t("admin.uploadImage.formatError"));
      event.target.value = ""; // Reset file input
      return;
    }

    try {
      // Create a unique filename
      const fileExtension = file.name.split(".").pop();
      const filename = `covers/${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExtension}`;
      const fileRef = storageRef(storage, filename);

      // Upload file with progress monitoring
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle progress
          uploadProgress.value = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error("Upload failed:", error);
          notify.error(t("admin.uploadImage.failed"));
        },
        async () => {
          try {
            // Wait a moment for the Cloud Function to process the image
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Get the URL of the resized image
            const resizedFileRef = storageRef(
              storage,
              `covers/resized_${filename.split("/").pop()}`,
            );

            const downloadURL = await getDownloadURL(resizedFileRef);
            book.value.coverImage = downloadURL;
            uploadProgress.value = 0;
          } catch (error) {
            console.error("Error getting resized image URL:", error);
            notify.error(t("admin.uploadImage.failed"));
          }
        },
      );
    } catch (error) {
      console.error("Error handling image upload:", error);
      notify.error(t("admin.uploadImage.failed"));
    }
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "books"), {
        ...book.value,
        isAvailable: true,
        createdAt: new Date(),
      });

      // Reset form
      book.value = {
        title: "",
        author: "",
        translator: "",
        illustrator: "",
        age: "",
        description: "",
        coverImage: "",
        isAvailable: true,
        ownerId: "",
        borrowerId: null,
      };

      notify.success(t("admin.addBook.messages.success"));
    } catch (error) {
      console.error("Error adding book:", error);
      notify.error(t("admin.addBook.messages.failed"));
    }
  };

  return {
    book,
    uploadProgress,
    isUploading,
    handleImageUpload,
    handleSubmit,
  };
}
