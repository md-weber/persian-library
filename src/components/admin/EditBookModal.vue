<template>
  <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen">
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black opacity-50"></div>

      <!-- Modal -->
      <div class="relative bg-white rounded-lg w-full max-w-2xl mx-4 p-6">
        <h2 class="text-xl font-semibold mb-4">
          {{ $t("admin.editBook.title") }}
        </h2>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">
                {{ $t("admin.addBook.form.title") }}
              </label>
              <input
                v-model="editedBook.title"
                type="text"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                {{ $t("admin.addBook.form.owner") }}
              </label>
              <select
                v-model="editedBook.ownerId"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">
                  {{ $t("admin.addBook.form.selectOwner") }}
                </option>
                <option v-for="user in users" :key="user.id" :value="user.id">
                  {{ user.name }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                {{ $t("admin.addBook.form.borrower") }}
              </label>
              <select
                v-model="editedBook.borrowerId"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">
                  {{ $t("admin.addBook.form.selectBorrower") }}
                </option>
                <option v-for="user in users" :key="user.id" :value="user.id">
                  {{ user.name }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                {{ $t("admin.addBook.form.author") }}
              </label>
              <input
                v-model="editedBook.author"
                type="text"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                {{ $t("admin.addBook.form.translator") }}
              </label>
              <input
                v-model="editedBook.translator"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                {{ $t("admin.addBook.form.illustrator") }}
              </label>
              <input
                v-model="editedBook.illustrator"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                {{ $t("admin.addBook.form.ageGroup") }}
              </label>
              <input
                v-model="editedBook.age"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                @input="normalizeAgeInput"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                {{ $t("admin.addBook.form.coverImage") }}
              </label>
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
                <div v-if="editedBook.coverImage" class="h-20 w-20">
                  <img
                    :src="editedBook.coverImage"
                    alt="Preview"
                    class="h-full w-full object-cover rounded-md"
                  />
                </div>
              </div>
            </div>

            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700">
                {{ $t("admin.addBook.form.description") }}
              </label>
              <textarea
                v-model="editedBook.description"
                rows="3"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              ></textarea>
            </div>
          </div>

          <div class="flex justify-end space-x-3">
            <button
              type="button"
              @click="$emit('close')"
              class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              {{ $t("common.cancel") }}
            </button>
            <button
              type="submit"
              :disabled="isUpdating || isUploading"
              class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-50"
            >
              {{
                isUploading
                  ? $t("admin.editBook.waitForUpload")
                  : $t("common.save")
              }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/repositories/firebase";
import { useI18n } from "vue-i18n";
import { useUsers } from "@/composables/useUsers";
import { useBookForm } from "@/composables/useBookForm";
import { convertNumbers, validateAgeInput } from "@/utils/numberConverter";
import { useNotification } from "@/composables/useNotification";

const { t } = useI18n();
const { users } = useUsers();
const { notify } = useNotification();

const props = defineProps({
  show: Boolean,
  book: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close", "update:book"]);
const editedBook = ref({});
const isUpdating = ref(false);

const { uploadProgress, isUploading, handleImageUpload } =
  useBookForm(editedBook);

// Watch for changes in the book prop
watch(
  () => props.book,
  (newBook) => {
    if (newBook) {
      editedBook.value = { ...newBook };
    }
  },
  { immediate: true, deep: true },
);

// Watch for show prop to reset form when modal is opened
watch(
  () => props.show,
  (newShow) => {
    if (newShow) {
      editedBook.value = { ...props.book };
    }
  },
);

watch(
  () => props.book?.age,
  (newValue) => {
    if (newValue) {
      editedBook.value.age = convertNumbers.toPersian(newValue.toString());
    }
  },
  { immediate: true },
);

const normalizeAgeInput = () => {
  const validInput = validateAgeInput(editedBook.value.age);
  editedBook.value.age = convertNumbers.toPersian(validInput);
};

const handleSubmit = async () => {
  if (isUploading.value) {
    notify.info(t("admin.editBook.waitForUpload"));
    return;
  }

  try {
    isUpdating.value = true;
    const bookRef = doc(db, "books", editedBook.value.id);
    await updateDoc(bookRef, {
      ...editedBook.value,
      updatedAt: new Date(),
    });
    emit("update:book", editedBook.value);
    emit("close");
  } catch (error) {
    console.error("Error updating book:", error);
    notify.error(t("admin.editBook.error"));
  } finally {
    isUpdating.value = false;
  }
};
</script>
