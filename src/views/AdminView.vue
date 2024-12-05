<template>
  <BaseLayout>
    <AdminHeader />
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <AddBookForm />
      <BooksTable
        :books="books"
        @delete-book="deleteBook"
        @update-book="handleBookUpdate"
      />
    </main>
  </BaseLayout>
</template>

<script setup>
import { onMounted } from "vue";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/repositories/firebase";
import BaseLayout from "@/components/BaseLayout.vue";
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AddBookForm from "@/components/admin/AddBookForm.vue";
import BooksTable from "@/components/admin/BooksTable.vue";
import { useBooks } from "@/composables/useBooks";

const { books, deleteBook, handleBookUpdate } = useBooks();

onMounted(() => {
  const unsubscribe = onSnapshot(collection(db, "books"), (snapshot) => {
    books.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });

  return () => unsubscribe();
});
</script>
