import {
  UpdateUserPasswordRequest,
  UpdateUserRequest,
  UsersService,
} from "@client";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import { Button, Grid, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function ChangePassword({
  search,
}: {
  search: UpdateUserRequest;
}) {
  const form = useForm<UpdateUserPasswordRequest>({
    defaultValues: { id: search.id },
  });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: UpdateUserPasswordRequest) =>
      UsersService.updateUserPasswordUsersPasswordPatch({ requestBody: data }),
    onSuccess: () => navigate({ to: "/admin/users" }),
  });
  const onSubmit = form.handleSubmit(
    (data) => mutation.mutate(data),
    () => Store.addNotification(formDataError),
  );
  const isDisabled = search.role === "admin";
  return (
    <form onSubmit={onSubmit}>
      <h2>Смена пароля</h2>
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
            label="Пароль(мин 6 символов)*"
            {...form.register("password", {
              required: true,
              pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
              minLength: 6,
            })}
          />
        </Grid>
        <Grid item>
          <Button type="submit" disabled={isDisabled} variant="contained">
            Сменить
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
