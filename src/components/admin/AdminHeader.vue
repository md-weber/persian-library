<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">
          {{ $t("admin.title") }}
        </h1>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
