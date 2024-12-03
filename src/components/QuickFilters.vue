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

const { t } = useI18n();

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

// Computed unique age groups from books
const ageGroups = computed(() => {
  const ages = new Set(props.books.map((book) => book.age).filter(Boolean));
  return Array.from(ages).sort();
});

// Filter functions
const applyFilters = () => {
  let filtered = [...props.books];

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

// Reset all filters
const resetFilters = () => {
  selectedAvailability.value = "all";
  selectedAgeGroup.value = "all";
  showNewArrivals.value = false;
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
</script>
