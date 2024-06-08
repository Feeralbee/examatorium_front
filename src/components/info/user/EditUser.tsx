import { UpdateUserRequest, UsersService } from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import { Checkbox, Grid, MenuItem, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function EditUser({ search }: { search: UpdateUserRequest }) {
  const form = useForm<UpdateUserRequest>({ defaultValues: search });
  const onSubmit = form.handleSubmit(
    (data) => mutation.mutate(data),
    () => Store.addNotification(formDataError),
  );
  const isDisabled = search.role === "admin";
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (userData: UpdateUserRequest) =>
      UsersService.updateUserUsersPatch({ requestBody: userData }),
    onSuccess: () => navigate({ to: "/admin/users" }),
  });
  return (
    <form onSubmit={onSubmit}>
      <h2>Редактирование пользователя</h2>
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
            disabled={isDisabled}
            label="Имя*"
            {...form.register("name", {
              required: true,
              pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
            })}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled={isDisabled}
            label="Фамилия*"
            {...form.register("surname", {
              required: true,
              pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
            })}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled={isDisabled}
            label="Отчество"
            {...form.register("patronymic")}
          />
        </Grid>
        <div>
          <Checkbox disabled={isDisabled} {...form.register("is_blocked")} />{" "}
          Заблокирован
        </div>
        <Button hidden={isDisabled} style={{ width: 150 }}>
          Подтвердить
        </Button>
      </Grid>
    </form>
  );
}
