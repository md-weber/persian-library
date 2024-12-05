<template>
  <div class="bg-white rounded-lg shadow p-6 mb-8">
    <h2 class="text-xl font-semibold mb-4">{{ $t("admin.addBook.title") }}</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">{{
            $t("admin.addBook.form.title")
          }}</label>
          <input
            v-model="newBook.title"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            {{ $t("admin.addBook.form.owner") }}
          </label>
          <input
            v-model="newBook.owner"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            :placeholder="$t('admin.addBook.form.ownerPlaceholder')"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">{{
            $t("admin.addBook.form.author")
          }}</label>
          <input
            v-model="newBook.author"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">{{
            $t("admin.addBook.form.translator")
          }}</label>
          <input
            v-model="newBook.translator"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">{{
            $t("admin.addBook.form.illustrator")
          }}</label>
          <input
            v-model="newBook.illustrator"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">{{
            $t("admin.addBook.form.ageGroup")
          }}</label>
          <input
            v-model="newBook.age"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">{{
            $t("admin.addBook.form.coverImage")
          }}</label>
          <div class="mt-1 flex items-center space-x-4">
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp"
              @change="handleImageUpload"
              class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            <div
              v-if="uploadProgress > 0 && uploadProgress < 100"
              class="text-sm text-gray-500"
            >
              {{
                $t("admin.addBook.form.uploadProgress", {
                  progress: uploadProgress,
                })
              }}
            </div>
            <div v-if="newBook.coverImage" class="h-20 w-20">
              <img
                :src="newBook.coverImage"
                alt="Preview"
                class="h-full w-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-gray-700">{{
            $t("admin.addBook.form.description")
          }}</label>
          <textarea
            v-model="newBook.description"
            rows="3"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
        </div>
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          :disabled="isUploading"
          class="px-4 py-2 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
          :class="
            isUploading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
          "
        >
          {{
            isUploading
              ? $t("admin.addBook.form.waitForUpload")
              : $t("admin.addBook.form.submit")
          }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useBookForm } from "@/composables/useBookForm";
import { useUsers } from "@/composables/useUsers";

const {
  newBook,
  handleImageUpload,
  handleSubmit,
  uploadProgress,
  isUploading,
} = useBookForm();
const { users } = useUsers();
</script>
