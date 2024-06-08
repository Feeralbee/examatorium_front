import { UsersService, CreateUserRequest } from "@client";
import Button from "@components/Button";
import {
  formDataError,
  loginInUse,
} from "@misc/notifies/forms_errors/formDataError";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Controller, SubmitErrorHandler, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

const CreateUserPage = () => {
  const form = useForm<CreateUserRequest>({
    defaultValues: { role: "student" },
  });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: CreateUserRequest) => {
      if (data.patronymic === "") data.patronymic = undefined;
      return UsersService.createUserUsersPost({ requestBody: data });
    },
    onSuccess: () => navigate({ to: "/admin/users" }),
    onError: () => Store.addNotification(loginInUse),
  });
  const onError: SubmitErrorHandler<CreateUserRequest> = () =>
    Store.addNotification(formDataError);
  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  }, onError);

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Создание пользователя</h1>
        <Grid
          container
          sx={{
            gap: 3,
            paddingTop: 3,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Grid item>
            <TextField
              label="Имя*"
              {...form.register("name", {
                required: true,
                pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
              })}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Фамилия*"
              {...form.register("surname", {
                required: true,
                pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
              })}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Отчетство"
              {...form.register("patronymic", {
                pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
              })}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Логин*"
              {...form.register("login", {
                required: true,
                pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
              })}
            />
          </Grid>
          <Grid item>
            <Controller
              control={form.control}
              name="role"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  label="Роль*"
                  select
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  sx={{ minWidth: 150 }}
                >
                  <MenuItem value={"student"}>Студент</MenuItem>
                  <MenuItem value={"teacher"}>Преподаватель</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Пароль(мин 6 символов)*"
              {...form.register("password", {
                required: true,
                pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
                minLength: 6,
              })}
            />
          </Grid>
          <Button style={{ width: 150 }}>Создать</Button>
        </Grid>
      </form>
      <Link to={"/admin/users"}>
        <Button style={{ width: 100, marginTop: 30 }}>Назад</Button>
      </Link>
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/create/user")({
  component: CreateUserPage,
});
