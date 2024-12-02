<script setup>
import HomePage from "./views/HomePage.vue";
</script>

<template>
  <div dir="rtl" class="font-[Vazir]">
    <nav dir="rtl" class="bg-white shadow-sm p-4">
      <div
        dir="rtl"
        class="max-w-7xl mx-auto flex justify-between items-center"
      >
        <RouterLink to="/" class="text-indigo-600 hover:text-indigo-800">
          Home
        </RouterLink>
        <RouterLink to="/admin" class="text-indigo-600 hover:text-indigo-800">
          Admin Dashboard
        </RouterLink>
      </div>
    </nav>
    <RouterView />
  </div>
</template>
