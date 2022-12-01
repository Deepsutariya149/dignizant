import { showNotification } from "./notification";

export const apiErrorBlock = (e) => {
  console.log(e);
  showNotification({
    title: "Error",
    message: e?.response?.statusText || e?.message,
    type: "danger",
  });
};

export const temp = 1;
