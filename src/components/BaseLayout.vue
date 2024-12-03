<template>
  <div class="min-h-screen bg-gray-50 text-black">
    <div class="max-w-7xl mx-auto">
      <slot></slot>
    </div>
  </div>
  <BaseFooter />
</template>

<script setup>
import BaseFooter from "./BaseFooter.vue";
</script>
