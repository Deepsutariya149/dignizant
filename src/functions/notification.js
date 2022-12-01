import { Store } from "react-notifications-component";

export function showNotification(payload) {
  Store.addNotification({
    title: payload.title,
    message: payload.message,
    type: payload.type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
}
