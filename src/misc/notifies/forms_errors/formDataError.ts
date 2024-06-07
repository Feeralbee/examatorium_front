import { iNotification } from "react-notifications-component";

const formDataError: iNotification = {
  title: "Проверьте введённые данные",
  type: "danger",
  insert: "top",
  container: "bottom-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 3000,
  },
};

export { formDataError };
