<template>
  <BaseLayout>
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Add New Book Form -->
      <div class="bg-white rounded-lg shadow p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Add New Book</h2>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Title</label
              >
              <input
                v-model="newBook.title"
                type="text"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Author</label
              >
              <input
                v-model="newBook.author"
                type="text"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Translator</label
              >
              <input
                v-model="newBook.translator"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Illustrator</label
              >
              <input
                v-model="newBook.illustrator"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Age Group</label
              >
              <input
                v-model="newBook.age"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Cover Image</label
              >
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
                  Uploading: {{ uploadProgress }}%
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
              <label class="block text-sm font-medium text-gray-700"
                >Description</label
              >
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
              Add Book
            </button>
          </div>
        </form>
      </div>

      <!-- Existing Books Table -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <h2 class="text-xl font-semibold p-6">Manage Books</h2>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Author
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
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
                  {{ book.isAvailable ? "Available" : "Borrowed" }}
                </span>
              </td>
              <td class="px-6 py-4">
                <button
                  @click="deleteBook(book)"
                  class="text-red-600 hover:text-red-800 mr-2"
                >
                  Delete
                </button>
                -
                <button
                  @click="editBook(book)"
                  class="text-indigo-600 hover:text-indigo-800"
                >
                  Edit
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
    alert("Please upload only JPG, PNG or WebP images.");
    event.target.value = ""; // Reset file input
    return;
  }

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    alert("File size must be less than 2MB.");
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
        alert("Failed to upload image. Please try again.");
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
    alert("Failed to handle image upload. Please try again.");
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

    alert("Book added successfully!");
  } catch (error) {
    console.error("Error adding book:", error);
    alert("Failed to add book. Please try again.");
  }
};

// Delete book
const deleteBook = async (book) => {
  if (confirm("Are you sure you want to delete this book?")) {
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
      alert("Book deleted successfully!");
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Failed to delete book. Please try again.");
    }
  }
};

// Edit book (you can implement this based on your needs)
const editBook = (book) => {
  // You could implement this by showing a modal or navigating to an edit page
  console.log("Edit book:", book);
};
</script>
