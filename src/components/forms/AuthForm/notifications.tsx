import { FieldErrors } from "react-hook-form";
import { iNotification } from "react-notifications-component";
import { UserAuthData } from "@misc/types";

const formError = (errors: FieldErrors<UserAuthData>): iNotification => {
  let message: string = "";
  if (errors.login && errors.password) message = "Введите логин и пароль";
  else if (errors.login) message = "Введите логин";
  else if (errors.password) message = "Введите пароль";
  return {
    title: "Ошибка ввода данных",
    message: message,
    type: "warning",
    insert: "top",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  };
};

const notFoundError: iNotification = {
  title: "Пользователь не найден",
  type: "danger",
  insert: "top",
  container: "bottom-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 3000,
  },
};

export { formError, notFoundError };
