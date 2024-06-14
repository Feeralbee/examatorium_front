import {
  CreateEducationalPracticeRequest,
  GroupsService,
  UsersService,
  DisciplinesService,
  EducationalPracticesService,
} from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import queryKeys from "@misc/queryKeys";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Controller, SubmitErrorHandler, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

const CreateCourseWorkPage = () => {
  const form = useForm<CreateEducationalPracticeRequest>();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: CreateEducationalPracticeRequest) =>
      EducationalPracticesService.createEducationalPracticesPost({
        requestBody: data,
      }),
    onSuccess: () => navigate({ to: "/admin/educational_practices" }),
  });
  const onError: SubmitErrorHandler<CreateEducationalPracticeRequest> = () =>
    Store.addNotification(formDataError);
  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  }, onError);

  const groupsQuery = useQuery({
    queryKey: queryKeys.allGroups,
    queryFn: () => GroupsService.allGroupsGroupsAllGet(),
    initialData: [],
  });

  const usersQuery = useQuery({
    queryKey: queryKeys.allUsers,
    queryFn: () => UsersService.getAllUsersUsersAllGet(),
    select: (data) => data.filter((value) => value.role === "teacher"),
    initialData: [],
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Создание учебной практики</h1>
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
              label="Название*"
              {...form.register("name", {
                required: true,
                pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
              })}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Кол-во часов*"
              type="number"
              {...form.register("hours_count", {
                required: true,
                valueAsNumber: true,
                min: 1,
              })}
            />
          </Grid>
          <Grid item>
            <Controller
              control={form.control}
              name="group_id"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  label="Группа*"
                  select
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  sx={{ width: 150 }}
                >
                  {groupsQuery.data.map((value) => (
                    <MenuItem key={value.id} value={`${value.id}`}>
                      {value.name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              control={form.control}
              name="teacher_id"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  label="Преподаватель*"
                  select
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  sx={{ width: 150 }}
                >
                  {usersQuery.data.map((value) => (
                    <MenuItem key={value.id} value={`${value.id}`}>
                      {`${value.surname} ${value.name} ${value.patronymic ?? ""}`}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Grid>
          <Button style={{ width: 150 }}>Создать</Button>
        </Grid>
      </form>
      <Link to={"/admin/educational_practices"}>
        <Button style={{ width: 100, marginTop: 30 }}>Назад</Button>
      </Link>
    </>
  );
};

export const Route = createLazyFileRoute(
  "/_auth/admin/create/educational_practice",
)({
  component: CreateCourseWorkPage,
});
