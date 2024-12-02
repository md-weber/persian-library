import { defineStore } from "pinia";
import { ref } from "vue";
import { auth } from "@/repositories/firebase";
import {
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from "firebase/auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const loading = ref(true);

  // Initialize auth state
  onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser;
    loading.value = false;
  });

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      user.value = userCredential.user;
      return true;
    } catch (error) {
      console.error("Auth error:", error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      user.value = null;
    } catch (error) {
      console.error("Sign out error:", error);
      throw error;
    }
  };

  const isAuthenticated = () => user.value !== null;

  return {
    user,
    loading,
    signIn,
    signOut,
    isAuthenticated,
  };
});
