import { createI18n } from "vue-i18n";

import en from "./locales/en.json";
import fa from "./locales/fa.json";

const savedLocale = localStorage.getItem("userLocale") || "fa";

export const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: savedLocale, // Default language
  fallbackLocale: "en",
  messages: {
    en,
    fa,
  },
});
