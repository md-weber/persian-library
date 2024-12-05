<template>
  <BaseLayout>
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto py-4">
        <h1 class="text-3xl font-bold text-gray-900 text-center">
          {{ $t("app.title") }}
        </h1>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-4">
      <!-- Search Input -->
      <div class="mb-4 bg-white px-4 py-4 rounded-lg">
        <div class="relative">
          <input
            type="text"
            v-model="searchQuery"
            :placeholder="$t('home.searchPlaceholder')"
            class="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
          />
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <svg
              class="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <!-- Search Results Count -->
        <p class="mt-2 text-sm text-gray-600">
          {{
            $t("home.booksCount", {
              filtered: filteredBooks.length,
              total: books.length,
            })
          }}
        </p>
      </div>

      <!-- Quick Filters -->
      <QuickFilters
        :books="books"
        @update:filtered-books="handleFilteredBooks"
      />

      <!-- Error message display -->
      <div v-if="error" class="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
        {{ error }}
      </div>

      <!-- Book Gallery Grid -->
      <div
        v-if="!error"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="book in filteredBooks"
          seLa
          :key="book.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg duration-300 hover:scale-105 transition-transform flex flex-col"
        >
          <!-- Book Cover Image -->
          <div class="aspect-w-4 aspect-h-3 w-full">
            <img
              :src="book.coverImage"
              :alt="book.title"
              class="w-full h-full object-fill"
            />
          </div>

          <!-- Book Information -->
          <div class="p-4 flex flex-col flex-grow">
            <div class="p-4 flex-grow">
              <!-- Align text to right for Persian -->
              <h3 class="text-lg font-semibold text-gray-900">
                {{ book.title }}
              </h3>
              <p class="text-sm text-gray-600">نویسنده: {{ book.author }}</p>
              <p v-if="book.translator" class="text-sm text-gray-600">
                {{
                  $t("home.bookTranslatorLabel", {
                    translator: book.translator,
                  })
                }}
              </p>
              <p v-if="book.illustrator" class="text-sm text-gray-600">
                {{
                  $t("home.bookIllustratorLabel", {
                    illustrator: book.illustrator,
                  })
                }}
              </p>
              <p v-if="book.age" class="text-sm text-gray-600">
                {{ $t("home.bookAgeLabel", { age: book.age }) }}
              </p>
              <p class="text-sm text-gray-600 mt-2">{{ book.description }}</p>
            </div>
            <!-- Availability Status -->
            <div class="mt-auto">
              <div class="flex items-center justify-center">
                <span class="text-sm" :class="getStatusClass(book)">
                  {{ getBookStatus(book) }}
                </span>
              </div>

              <!-- Action Button -->
              <button
                v-if="showBorrowButton(book)"
                @click="borrowBook(book)"
                :disabled="!book.isAvailable"
                class="mt-3 w-full px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ $t("home.borrowBook") }}
              </button>

              <button
                v-else-if="showReturnButton(book)"
                @click="returnBook(book)"
                class="mt-3 w-full px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700"
              >
                {{ $t("home.returnBook") }}
              </button>

              <button
                v-else-if="showReceiveButton(book)"
                @click="receiveBook(book)"
                class="mt-3 w-full px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                {{ $t("home.receiveBook") }}
              </button>

              <div
                v-else-if="showPendingReturnMessage(book)"
                class="mt-3 text-sm text-center text-gray-600"
              >
                {{ $t("home.status.waitingForOwner") }}
              </div>

              <button
                v-else
                disabled
                class="mt-3 w-full px-4 py-2 rounded-md text-sm font-medium text-white bg-gray-400 cursor-not-allowed"
              >
                {{ $t("home.notAvailable") }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- No Results Message -->
      <div
        v-if="filteredBooks.length === 0 && !error"
        class="text-center py-10"
      >
        <p class="text-gray-500">{{ $t("home.noBooksFound") }}</p>
      </div>
    </main>
  </BaseLayout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "@/repositories/firebase";
import BaseLayout from "@/components/BaseLayout.vue";
import QuickFilters from "@/components/QuickFilters.vue";
import { useAuthStore } from "@/stores/authStore";
import { useNotification } from "@/composables/useNotification";

const router = useRouter();
const authStore = useAuthStore();
const { notify } = useNotification();

const books = ref([]);
const error = ref(null);
const searchQuery = ref("");
const displayedBooks = ref([]);

const getStatusClass = (book) => {
  if (book.status === "pending_return") return "text-orange-600";
  if (book.isAvailable) return "text-green-600";
  return "text-red-600";
};

const getBookStatus = (book) => {
  if (book.status === "pending_return") {
    if (book.borrowerId === authStore.user?.id) {
      return t("home.status.returnPending");
    }
    if (book.ownerId === authStore.user?.id) {
      return t("home.status.confirmReturn");
    }
    return t("home.status.pendingReturn");
  }

  if (book.isAvailable) {
    return t("home.status.available");
  }
  if (book.borrowerId === authStore.user?.id) {
    return t("home.status.youBorrowed");
  }
  if (book.ownerId === authStore.user?.id) {
    return t("home.status.pendingReturn");
  }
  return t("home.status.currentlyBorrowed");
};

const showBorrowButton = (book) => {
  return (
    book.isAvailable &&
    book.ownerId !== authStore.user?.id &&
    book.status !== "pending_return"
  );
};
const showReturnButton = (book) => {
  return (
    !book.isAvailable &&
    book.borrowerId === authStore.user?.id &&
    book.status !== "pending_return"
  );
};

const showReceiveButton = (book) => {
  return (
    !book.isAvailable &&
    book.ownerId === authStore.user?.id &&
    book.status === "pending_return"
  );
};

const showPendingReturnMessage = (book) => {
  return (
    book.status === "pending_return" && book.borrowerId === authStore.user?.id
  );
};

// Helper function to check if a value is a string and contains the search query
const matchesSearch = (value, query) => {
  return typeof value === "string" && value.toLowerCase().includes(query);
};

// Update the filteredBooks computed property
const filteredBooks = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  const booksToFilter =
    displayedBooks.value.length > 0 ? displayedBooks.value : books.value;

  if (!query) return booksToFilter;

  return booksToFilter.filter((book) => {
    return Object.values(book).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(query);
      }
      return false;
    });
  });
});

// Handle filtered books from QuickFilters
const handleFilteredBooks = (filtered) => {
  displayedBooks.value = filtered;
};

onMounted(() => {
  try {
    const unsubscribe = onSnapshot(
      collection(db, "books"),
      (snapshot) => {
        books.value = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        error.value = null;
      },
      (err) => {
        console.error("Firestore error:", err);
        error.value = "Error loading books. Please try again later.";
      },
    );

    // Cleanup listener on unmount
    return () => unsubscribe();
  } catch (e) {
    console.error("Error setting up listener:", e);
    error.value = "Error connecting to database. Please try again later.";
  }
});

const returnBook = async (book) => {
  try {
    const bookRef = doc(db, "books", book.id);
    await updateDoc(bookRef, {
      returnedAt: new Date(),
      status: "pending_return",
    });
    notify.success(t("home.messages.returnSuccess"));
  } catch (error) {
    console.error("Error returning book:", error);
    notify.error(t("home.messages.failed"));
  }
};

const receiveBook = async (book) => {
  try {
    const bookRef = doc(db, "books", book.id);
    await updateDoc(bookRef, {
      isAvailable: true,
      borrowerId: null,
      borrowedAt: null,
      returnedAt: null,
      status: "available",
    });
    notify.success(t("home.messages.receiveSuccess"));
  } catch (error) {
    console.error("Error receiving book:", error);
    notify.error(t("home.messages.failed"));
  }
};

const borrowBook = async (book) => {
  if (!authStore.user) {
    router.push("/login");
    return;
  }

  try {
    const bookRef = doc(db, "books", book.id);
    await updateDoc(bookRef, {
      isAvailable: false,
      borrowerId: authStore.user.id,
      borrowedAt: new Date(),
    });
    notify.success("home.messages.borrowSuccess");
  } catch (error) {
    console.error("Error updating book:", error);
    notify.error("home.messages.failed");
  }
};
</script>
