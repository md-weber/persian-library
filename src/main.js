import "./assets/main.css";

import { createApp, watch } from "vue";
import App from "./App.vue";
import router from "./router"; // Import the router
import { createPinia } from "pinia";
import { i18n } from "./i18n";
import Toast from "vue-toastification";
import { toastOptions } from "./config/toast";

const app = createApp(App);

app
  .use(i18n)
  .use(createPinia())
  .use(router)
  .use(Toast, toastOptions)
  .mount("#app");
