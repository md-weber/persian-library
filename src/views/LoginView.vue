<template>
  <BaseLayout>
    <div
      class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {{ $t("auth.login.title") }}
          </h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">{{
                $t("auth.login.emailLabel")
              }}</label>
              <input
                v-model="email"
                id="email-address"
                name="email"
                type="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                :placeholder="$t('auth.login.emailPlaceholder')"
              />
            </div>
            <div>
              <label for="password" class="sr-only">{{
                $t("auth.login.passwordLabel")
              }}</label>
              <input
                v-model="password"
                id="password"
                name="password"
                type="password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                :placeholder="$t('auth.login.passwordPlaceholder')"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {{ $t("auth.login.signInButton") }}
            </button>
          </div>
        </form>
        <div class="text-center">
          <p class="text-sm text-gray-600">
            {{ $t("auth.login.noAccount") }}
            <RouterLink
              to="/register"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {{ $t("auth.login.registerLink") }}
            </RouterLink>
          </p>
        </div>
        <div v-if="error" class="text-red-500 text-center mt-2">
          {{ error }}
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import BaseLayout from "@/components/BaseLayout.vue";

const router = useRouter();
const authStore = useAuthStore();

const email = ref("");
const password = ref("");
const error = ref("");

const handleLogin = async () => {
  try {
    await authStore.signIn(email.value, password.value);
    router.push("/admin");
  } catch (err) {
    error.value = t("errors.invalidEmailOrPassword");
  }
};
</script>
