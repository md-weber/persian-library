<template>
  <div dir="rtl" class="font-[Vazir]">
    <nav dir="rtl" class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <RouterLink to="/" class="text-indigo-600 hover:text-indigo-800">
            Home
          </RouterLink>
          <div>
            <RouterLink
              v-if="authStore.isAuthenticated()"
              to="/admin"
              class="text-indigo-600 hover:text-indigo-800 mr-4"
            >
              Admin Dashboard
            </RouterLink>
            <button
              v-if="authStore.isAuthenticated()"
              @click="handleLogout"
              class="text-red-600 hover:text-red-800"
            >
              Logout
            </button>
            <RouterLink
              v-else
              to="/login"
              class="text-indigo-600 hover:text-indigo-800"
            >
              Login
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <RouterView v-if="!authStore.loading" />
    <div v-else class="flex justify-center items-center min-h-screen">
      Loading...
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
  try {
    await authStore.signOut();
    router.push("/");
  } catch (error) {
    console.error("Logout error:", error);
  }
};
</script>
