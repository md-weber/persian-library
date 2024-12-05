<template>
  <div class="font-[Vazir]">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <!-- Language switcher -->
          <select
            v-model="currentLocale"
            @change="changeLanguage"
            class="rounded-md border-gray-300 text-black"
          >
            <option value="fa">فارسی</option>
            <option value="en">English</option>
          </select>
          <RouterLink to="/" class="text-indigo-600 hover:text-indigo-800">
            {{ $t("routes.home") }}
          </RouterLink>
          <div>
            <RouterLink
              v-if="authStore.isAuthenticated()"
              to="/admin"
              class="text-indigo-600 hover:text-indigo-800 mr-4"
            >
              {{ $t("routes.adminDashboard") }}
            </RouterLink>
            <button
              v-if="authStore.isAuthenticated()"
              @click="handleLogout"
              class="text-red-600 hover:text-red-800"
            >
              {{ $t("routes.logout") }}
            </button>
            <RouterLink
              v-else
              to="/login"
              class="text-indigo-600 hover:text-indigo-800"
            >
              {{ $t("routes.login") }}
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <RouterView v-if="!authStore.loading" />
    <div v-else class="flex justify-center items-center min-h-screen">
      {{ $t("app.loading") }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/authStore";
import { auth } from "@/repositories/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/repositories/firebase";

const { locale } = useI18n();
const currentLocale = ref(locale.value);
const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      // Get user data from Firestore
      const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
      if (userDoc.exists()) {
        authStore.user = { id: firebaseUser.uid, ...userDoc.data() };
      }
    } else {
      authStore.user = null;
    }
    authStore.loading = false;
  });
});

const changeLanguage = () => {
  locale.value = currentLocale.value;
  localStorage.setItem("userLocale", currentLocale.value);
  document.documentElement.dir = currentLocale.value === "fa" ? "rtl" : "ltr";
};

document.documentElement.dir = currentLocale.value === "fa" ? "rtl" : "ltr";

const handleLogout = async () => {
  try {
    await authStore.signOut();
    router.push("/");
  } catch (error) {
    console.error("Logout error:", error);
  }
};
</script>
