import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/repositories/firebase";

export function useUsers() {
  const users = ref([]);
  const loading = ref(true);
  const error = ref(null);

  onMounted(() => {
    fetchUsers();
  });

  const fetchUsers = async () => {
    try {
      loading.value = true;
      const querySnapshot = await getDocs(collection(db, "users"));
      users.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (err) {
      console.error("Error fetching users:", err);
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    users,
    loading,
    error,
    fetchUsers,
  };
}
