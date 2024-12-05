import { ref, onMounted } from "vue";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/repositories/firebase";

export function useUsers() {
  const users = ref([]);

  onMounted(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      users.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });

    return () => unsubscribe();
  });

  return {
    users,
  };
}
