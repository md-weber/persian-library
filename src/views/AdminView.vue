<template>
  <BaseLayout>
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-bold text-gray-900">
            {{ $t("admin.title") }}
          </h1>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Add New Book Form -->
      <div class="bg-white rounded-lg shadow p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">
          {{ $t("admin.addBook.title") }}
        </h2>
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
              class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              {{ $t("admin.addBook.form.submit") }}
            </button>
          </div>
        </form>
      </div>

      <!-- Existing Books Table -->
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
                <span
                  :class="book.isAvailable ? 'text-green-600' : 'text-red-600'"
                >
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
    </main>
  </BaseLayout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import BaseLayout from "@/components/BaseLayout.vue";
import { ref, onMounted } from "vue";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "@/repositories/firebase";

const books = ref([]);
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

// Load books
onMounted(() => {
  const unsubscribe = onSnapshot(collection(db, "books"), (snapshot) => {
    books.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });

  return () => unsubscribe();
});

const uploadProgress = ref(0);
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

// Add image upload handler
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

// Add new book
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

// Delete book
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

// Edit book (you can implement this based on your needs)
const editBook = (book) => {
  // You could implement this by showing a modal or navigating to an edit page
  console.log("Edit book:", book);
};
</script>
