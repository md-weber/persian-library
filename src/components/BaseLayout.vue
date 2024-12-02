<template>
  <div class="min-h-screen bg-gray-50 text-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="bg-white shadow-sm px-8">
        <div class="flex justify-between items-center">
          <RouterLink to="/" class="text-indigo-600 hover:text-indigo-800">
            Home
          </RouterLink>
          <RouterLink to="/admin" class="text-indigo-600 hover:text-indigo-800">
            Admin Dashboard
          </RouterLink>
        </div>
      </nav>
      <slot></slot>
    </div>
  </div>
</template>
