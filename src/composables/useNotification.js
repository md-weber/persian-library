import { useToast } from "vue-toastification";
import { useI18n } from "vue-i18n";

export function useNotification() {
  const { t } = useI18n();
  const toast = useToast();

  const notify = {
    success(message) {
      toast.success(t(message));
    },
    error(message) {
      toast.error(t(message));
    },
    info(message) {
      toast.info(t(message));
    },
    warning(message) {
      toast.warning(t(message));
    },
  };

  return {
    notify,
  };
}
