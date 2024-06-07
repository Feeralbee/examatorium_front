import { UpdateUserRequest, UsersService } from "@client";
import Button from "@components/Button";
import { Checkbox, Grid, MenuItem, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { useForm, Controller } from "react-hook-form";

const UserInfo = () => {
  const search: UpdateUserRequest = Route.useSearch();
  const form = useForm<UpdateUserRequest>({ defaultValues: search });
  const mutation = useMutation({
    mutationFn: (userData: UpdateUserRequest) =>
      UsersService.updateUserUsersPatch({ requestBody: userData }),
  });
  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Редактирование пользователя</h1>
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
              {...form.register("name", { required: true })}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Фамилия*"
              {...form.register("surname", { required: true })}
            />
          </Grid>
          <Grid item>
            <TextField label="Отчество" {...form.register("patronymic")} />
          </Grid>
          <Grid item>
            <Controller
              control={form.control}
              name="role"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  label="Роль"
                  select
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                >
                  <MenuItem value="student">Студент</MenuItem>
                  <MenuItem value="teacher">Преподователь</MenuItem>
                  <MenuItem value="admin">Администратор</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <div>
            <Checkbox {...form.register("is_blocked")} /> Заблокирован
          </div>
          <Button style={{ width: 150 }}>Подтвердить</Button>
        </Grid>
      </form>
      <Link to={"/admin/users"}>
        <Button style={{ width: 100, marginTop: 30 }}>Назад</Button>
      </Link>
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/info/user")({
  component: UserInfo,
});
