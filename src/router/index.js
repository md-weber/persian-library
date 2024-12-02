import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AdminView from "../views/AdminView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    // You might want to add authentication guard here
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
