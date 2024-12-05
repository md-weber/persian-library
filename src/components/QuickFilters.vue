<template>
  <div class="bg-white p-4 rounded-lg shadow-sm mb-6">
    <div class="flex flex-wrap gap-4">
      <!-- Availability Filter -->
      <div class="flex-1 min-w-[200px]">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          {{ $t("filters.availability") }}
        </label>
        <select
          v-model="selectedAvailability"
          @change="updateFilters"
          class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="all">{{ $t("filters.all") }}</option>
          <option value="available">{{ $t("filters.available") }}</option>
          <option value="borrowed">{{ $t("filters.borrowed") }}</option>
        </select>
      </div>

      <!-- Age Group Filter -->
      <div class="flex-1 min-w-[200px]">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          {{ $t("filters.ageGroup") }}
        </label>
        <select
          v-model="selectedAgeGroup"
          @change="updateFilters"
          class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="all">{{ $t("filters.all") }}</option>
          <option v-for="age in ageGroups" :key="age" :value="age">
            {{ age }}
          </option>
        </select>
      </div>

      <!-- Quick Filter Buttons -->
      <div class="flex flex-wrap gap-2 items-end flex-1 min-w-[200px]">
        <button
          v-if="userId && userBooksCount != 0"
          @click="toggleMyBooks"
          :class="[
            'px-4 py-2 rounded-md text-sm font-medium',
            showMyBooks
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
          ]"
        >
          {{ $t("filters.myBooks") }}
          <span class="ml-1 text-xs"> ({{ userBooksCount }}) </span>
        </button>

        <button
          @click="toggleNewArrivals"
          :class="[
            'px-4 py-2 rounded-md text-sm font-medium',
            showNewArrivals
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
          ]"
        >
          {{ $t("filters.newArrivals") }}
        </button>

        <!-- Reset Filters Button -->
        <button
          @click="resetFilters"
          class="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
          {{ $t("filters.reset") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/authStore";

const { t } = useI18n();
const authStore = useAuthStore();

const props = defineProps({
  books: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["update:filtered-books"]);

// Filter states
const selectedAvailability = ref("all");
const selectedAgeGroup = ref("all");
const showNewArrivals = ref(false);
const showMyBooks = ref(false);

// Get current user ID
const userId = computed(() => authStore.user?.id);

const userBooksCount = computed(() => {
  if (!userId.value) return 0;
  return props.books.filter((book) => book.ownerId === userId.value).length;
});

// Computed unique age groups from books
const ageGroups = computed(() => {
  const ages = new Set(props.books.map((book) => book.age).filter(Boolean));
  return Array.from(ages).sort();
});

// Filter functions
const applyFilters = () => {
  let filtered = [...props.books];

  // My Books filter
  if (showMyBooks.value && userId.value) {
    filtered = filtered.filter((book) => book.ownerId === userId.value);
  }

  // Availability filter
  if (selectedAvailability.value !== "all") {
    filtered = filtered.filter((book) =>
      selectedAvailability.value === "available"
        ? book.isAvailable
        : !book.isAvailable,
    );
  }

  // Age group filter
  if (selectedAgeGroup.value !== "all") {
    filtered = filtered.filter((book) => book.age === selectedAgeGroup.value);
  }

  // New arrivals filter (books added in the last 30 days)
  if (showNewArrivals.value) {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    filtered = filtered.filter((book) => {
      const bookDate = book.createdAt?.toDate();
      return bookDate && bookDate > thirtyDaysAgo;
    });
  }

  emit("update:filtered-books", filtered);
};

// Update filters
const updateFilters = () => {
  applyFilters();
};

// Toggle new arrivals
const toggleNewArrivals = () => {
  showNewArrivals.value = !showNewArrivals.value;
  applyFilters();
};

// Toggle my books
const toggleMyBooks = () => {
  showMyBooks.value = !showMyBooks.value;
  applyFilters();
};

// Reset all filters
const resetFilters = () => {
  selectedAvailability.value = "all";
  selectedAgeGroup.value = "all";
  showNewArrivals.value = false;
  showMyBooks.value = false;
  applyFilters();
};

// Watch for changes in books prop
watch(
  () => props.books,
  () => {
    applyFilters();
  },
  { deep: true },
);

// Watch for changes in userId
watch(
  () => userId.value,
  () => {
    if (!userId.value) {
      showMyBooks.value = false;
    }
    applyFilters();
  },
);
</script>
