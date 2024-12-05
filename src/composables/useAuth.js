import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/repositories/firebase";

export function useAuth() {
  const currentUser = ref(null);
  const loading = ref(true);

  const createUserInDb = async (uid, userData) => {
    await setDoc(doc(db, "users", uid), {
      ...userData,
      role: "user", // Default role
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };

  const signUp = async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await createUserInDb(userCredential.user.uid, {
      email,
      name,
      role: "user",
    });
  };

  const signIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));

    if (!userDoc.exists()) {
      // Create user document if it doesn't exist (for existing Firebase auth users)
      await createUserInDb(userCredential.user.uid, {
        email,
        name: email.split("@")[0], // Default name from email
        role: "user",
      });
    }

    return userDoc.data();
  };

  const signOut = () => firebaseSignOut(auth);

  return {
    currentUser,
    loading,
    signUp,
    signIn,
    signOut,
  };
}
