import {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Store, iNotification } from "react-notifications-component";
import "@styles/AuthForm.scss"
import Button from "@components/Button";
import Input from "@components/Input";


type AuthFormInputs = {
  login: string;
  password: string;
};

const errorNotification = (
  errors: FieldErrors<AuthFormInputs>
): iNotification => {
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
      duration: 5000,
      onScreen: true,
    },
  };
};

const onSubmit: SubmitHandler<AuthFormInputs> = (data) => {console.log(data)};
const onError: SubmitErrorHandler<AuthFormInputs> = (data) =>
  Store.addNotification(errorNotification(data));

export default function AuthForm() {
  const { handleSubmit, register } = useForm<AuthFormInputs>();
  return (
    <div className="auth-form">
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Input {...register("login", {required: true})} label="Логин" />
        <Input {...register("password", {required: true})} label="Пароль" type="password" />
        <Button className="auth-button" type="submit">Войти</Button>
      </form>
    </div>
  );
}
