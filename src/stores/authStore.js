import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const { signIn: authSignIn, signOut: authSignOut } = useAuth();

  const signIn = async (email, password) => {
    const userData = await authSignIn(email, password);
    user.value = userData;
  };

  const signOut = async () => {
    await authSignOut();
    user.value = null;
  };

  const isAuthenticated = () => !!user.value;
  const isAdmin = () => user.value?.role === "admin";
  const isUser = () => user.value?.role === "user";

  return {
    user,
    signIn,
    signOut,
    isAuthenticated,
    isAdmin,
    isUser,
  };
});
