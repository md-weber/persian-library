<template>
  <div class="bg-white rounded-lg shadow overflow-hidden">
    <h2 class="text-xl font-semibold p-6">
      {{ $t("admin.manageBooks.title") }}
    </h2>
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ $t("admin.manageBooks.table.title") }}
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ $t("admin.manageBooks.table.author") }}
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ $t("admin.manageBooks.table.owner") }}
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ $t("admin.manageBooks.table.borrower") }}
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ $t("admin.manageBooks.table.status") }}
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ $t("admin.manageBooks.table.actions") }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="book in books" :key="book.id">
          <td class="px-6 py-4">{{ book.title }}</td>
          <td class="px-6 py-4">{{ book.author }}</td>
          <td class="px-6 py-4">
            {{ book.owner || "-" }}
          </td>
          <td class="px-6 py-4">
            {{ book.borrower || "-" }}
          </td>
          <td class="px-6 py-4">
            <span :class="book.isAvailable ? 'text-green-600' : 'text-red-600'">
              {{
                book.isAvailable
                  ? $t("admin.manageBooks.table.available")
                  : $t("admin.manageBooks.table.borrowed")
              }}
            </span>
          </td>
          <td class="px-6 py-4">
            <button
              @click="deleteBook(book)"
              class="text-red-600 hover:text-red-800 mr-2"
            >
              {{ $t("admin.manageBooks.table.delete") }}
            </button>
            -
            <button
              @click="editBook(book)"
              class="text-indigo-600 hover:text-indigo-800"
            >
              {{ $t("admin.manageBooks.table.edit") }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <EditBookModal
      :show="showEditModal"
      :book="selectedBook"
      @close="closeEditModal"
      @update:book="handleBookUpdate"
    />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useUsers } from "@/composables/useUsers";
import EditBookModal from "./EditBookModal.vue";

const showEditModal = ref(false);
const selectedBook = ref(null);

const props = defineProps({
  books: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["delete-book", "update-book"]);

const { users } = useUsers();

const booksWithUsers = computed(() => {
  return props.books.map((book) => ({
    ...book,
    owner: users.value.find((user) => user.id === book.ownerId),
    borrower: users.value.find((user) => user.id === book.borrowerId),
  }));
});

const editBook = (book) => {
  selectedBook.value = JSON.parse(JSON.stringify(book));
  showEditModal.value = true;
};

const closeEditModal = () => {
  showEditModal.value = false;
  selectedBook.value = null;
};

const handleBookUpdate = (updatedBook) => {
  emit("update-book", updatedBook);
};
</script>
