import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { storage, db } from "@/repositories/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export function useBookForm() {
  const { t } = useI18n();
  const newBook = ref({
    title: "",
    author: "",
    translator: "",
    illustrator: "",
    age: "",
    description: "",
    coverImage: "",
    isAvailable: true,
  });
  const uploadProgress = ref(0);
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes
  const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Check file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      alert(t("admin.uploadImage.formatError"));
      event.target.value = ""; // Reset file input
      return;
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      alert(t("admin.uploadImage.fileSizeError"));
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
          alert(t("admin.uploadImage.failed"));
        },
        async () => {
          // Handle successful upload
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          newBook.value.coverImage = downloadURL;
          uploadProgress.value = 0;
        },
      );
    } catch (error) {
      console.error("Error handling image upload:", error);
      alert(t("admin.uploadImage.failed"));
    }
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "books"), {
        ...newBook.value,
        isAvailable: true,
        createdAt: new Date(),
      });

      // Reset form
      newBook.value = {
        title: "",
        author: "",
        translator: "",
        illustrator: "",
        age: "",
        description: "",
        coverImage: "",
        isAvailable: true,
      };

      alert(t("admin.addBook.messages.success"));
    } catch (error) {
      console.error("Error adding book:", error);
      alert(t("admin.addBook.messages.failed"));
    }
  };

  const isUploading = computed(() => {
    return uploadProgress.value > 0 && uploadProgress.value < 100;
  });

  return {
    newBook,
    uploadProgress,
    isUploading,
    handleImageUpload,
    handleSubmit,
  };
}