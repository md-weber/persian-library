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
  </div>
</template>

<script setup>
defineProps({
  books: {
    type: Array,
    required: true,
  },
});

defineEmits(["delete-book", "edit-book"]);
</script>
