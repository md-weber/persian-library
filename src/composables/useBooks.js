import { ref } from "vue";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { ref as storageRef, deleteObject } from "firebase/storage";
import { db, storage } from "@/repositories/firebase";
import { useI18n } from "vue-i18n";
import { useNotification } from "@/composables/useNotification";

export function useBooks() {
  const { t } = useI18n();
  const { notify } = useNotification();

  const books = ref([]);

  const deleteBook = async (book) => {
    if (confirm(t("admin.manageBooks.messages.confirmDelete"))) {
      try {
        // Delete the image from Storage if it exists
        if (book.coverImage) {
          const imageRef = storageRef(storage, book.coverImage);
          await deleteObject(imageRef).catch((error) => {
            console.log("Error deleting image:", error);
          });
        }

        // Delete the book document
        await deleteDoc(doc(db, "books", book.id));
        notify.success(t("admin.manageBooks.messages.success"));
      } catch (error) {
        console.error("Error deleting book:", error);
        notify.error(t("admin.manageBooks.messages.failed"));
      }
    }
  };

  const handleBookUpdate = (updatedBook) => {
    // The books list should automatically update through the Firestore listener
    // But you could also update the local state if needed
    books.value = books.value.map((book) =>
      book.id === updatedBook.id ? updatedBook : book,
    );
  };

  return {
    books,
    deleteBook,
    handleBookUpdate,
  };
}
