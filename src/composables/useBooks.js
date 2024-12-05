import { ref } from "vue";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { ref as storageRef, deleteObject } from "firebase/storage";
import { db, storage } from "@/repositories/firebase";
import { useI18n } from "vue-i18n";

export function useBooks() {
  const { t } = useI18n();
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
        alert(t("admin.manageBooks.messages.success"));
      } catch (error) {
        console.error("Error deleting book:", error);
        alert(t("admin.manageBooks.messages.failed"));
      }
    }
  };

  const editBook = (book) => {
    // You could implement this by showing a modal or navigating to an edit page
    console.log("Edit book:", book);
  };

  return {
    books,
    deleteBook,
    editBook,
  };
}
