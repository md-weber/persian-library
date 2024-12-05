<template>
  <BaseLayout>
    <div
      class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {{ $t("auth.register.title") }}
          </h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                v-model="name"
                type="text"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                :placeholder="$t('auth.register.namePlaceholder')"
              />
            </div>
            <div>
              <input
                v-model="email"
                type="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                :placeholder="$t('auth.register.emailPlaceholder')"
              />
            </div>
            <div>
              <input
                v-model="password"
                type="password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                :placeholder="$t('auth.register.passwordPlaceholder')"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {{ $t("auth.register.submitButton") }}
            </button>
          </div>
        </form>
        <div class="text-center">
          <p class="text-sm text-gray-600">
            {{ $t("auth.register.haveAccount") }}
            <RouterLink
              to="/login"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {{ $t("auth.register.loginLink") }}
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";
import BaseLayout from "@/components/BaseLayout.vue";

const router = useRouter();
const { signUp } = useAuth();

const name = ref("");
const email = ref("");
const password = ref("");
const error = ref("");

const handleRegister = async () => {
  try {
    await signUp(email.value, password.value, name.value);
    router.push("/login");
  } catch (err) {
    error.value = err.message;
  }
};
</script>
