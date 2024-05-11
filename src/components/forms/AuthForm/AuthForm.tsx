import { useForm } from "react-hook-form";
import "@styles/AuthForm.scss";
import Button from "@components/Button";
import Input from "@components/Input";
import { UserAuthData } from "@misc/types";
import * as handlers from "./handlers";
import { useAuth } from "@hooks";
import { Store } from "react-notifications-component";
import { notFoundError } from "./notifications";
import { useEffect } from "react";

export default function AuthForm() {
  const { handleSubmit, register } = useForm<UserAuthData>();
  const auth = useAuth();
  const onSubmit = handleSubmit(
    (data) => handlers.onSubmit(auth, data),
    handlers.onError,
  );
  useEffect(() => {
    if (auth.query.error?.message === "Not Found")
      Store.addNotification(notFoundError);
  }, [auth.query.error]);
  return (
    <div className="auth-form">
      <h1>Авторизация</h1>
      <form onSubmit={onSubmit}>
        <Input {...register("login", { required: true })} label="Логин" />
        <Input
          {...register("password", { required: true })}
          label="Пароль"
          type="password"
        />
        <Button
          className="auth-button"
          type="submit"
          disabled={auth.query.isFetching}
        >
          {auth.query.isFetching ? "..." : "Войти"}
        </Button>
      </form>
    </div>
  );
}
