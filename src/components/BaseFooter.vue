<template>
  <footer class="bg-gray-50 border-t border-gray-200 mt-auto">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="md:flex md:justify-between">
        <!-- Project Info -->
        <div class="mb-4 md:mb-0">
          <h3 class="text-sm font-semibold text-gray-700">
            {{ $t("footer.title") }}
          </h3>
          <p class="mt-2 text-sm text-gray-500">
            {{ $t("footer.description") }}
          </p>
        </div>

        <!-- Privacy Info -->
        <div class="max-w-md">
          <h3 class="text-sm font-semibold text-gray-700">
            {{ $t("footer.dataPrivacy.title") }}
          </h3>
          <p class="mt-2 text-sm text-gray-500">
            {{ $t("footer.dataPrivacy.storage") }}
          </p>
          <p class="mt-2 text-sm text-gray-500">
            {{ $t("footer.dataPrivacy.firebase") }}
          </p>
          <p class="mt-2 text-sm text-gray-500">
            {{ $t("footer.dataPrivacy.fairUse") }}
          </p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 border-t border-gray-200 pt-4">
        <p class="text-xs text-gray-500 text-center">
          {{ $t("footer.copyright", { year: new Date().getFullYear() }) }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
