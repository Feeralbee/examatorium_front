import {
  ExamsService,
  DisciplinesService,
  UsersService,
  GroupsService,
  CreateExamRequest,
} from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import queryKeys from "@misc/queryKeys";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Controller, SubmitErrorHandler, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

const CreateExamPage = () => {
  const form = useForm<CreateExamRequest>();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: CreateExamRequest) =>
      ExamsService.createExamsPost({ requestBody: data }),
    onSuccess: () => navigate({ to: "/admin/exams" }),
  });
  const onError: SubmitErrorHandler<CreateExamRequest> = () =>
    Store.addNotification(formDataError);
  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  }, onError);

  const disciplinesQuery = useQuery({
    queryKey: queryKeys.allDisciplines,
    queryFn: () => DisciplinesService.allDisciplinesAllGet(),
    initialData: [],
  });
  const groupsQuery = useQuery({
    queryKey: queryKeys.allGroups,
    queryFn: () => GroupsService.allGroupsGroupsAllGet(),
    initialData: [],
  });
  const teachersQuery = useQuery({
    queryKey: queryKeys.allUsers,
    queryFn: () => UsersService.getAllUsersUsersAllGet(),
    initialData: [],
    select: (data) => data.filter((value) => value.role === "teacher"),
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Создание экзамена</h1>
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
            <Controller
              control={form.control}
              name="discipline_id"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  label="Дисциплина*"
                  select
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  sx={{ minWidth: 150 }}
                >
                  {disciplinesQuery.data.map((value) => (
                    <MenuItem
                      key={value.id}
                      value={`${value.id}`}
                    >{`${value.index} ${value.name}`}</MenuItem>
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
                  sx={{ minWidth: 170 }}
                >
                  {teachersQuery.data.map((value) => (
                    <MenuItem
                      key={value.id}
                      value={`${value.id}`}
                    >{`${value.name} ${value.surname} ${value.patronymic ?? ""}`}</MenuItem>
                  ))}
                </TextField>
              )}
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
                  sx={{ minWidth: 100 }}
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
            <TextField
              label="Семестр*"
              type="number"
              sx={{ width: 100 }}
              {...form.register("semester", {
                required: true,
                valueAsNumber: true,
              })}
            />
          </Grid>
          <Button style={{ width: 150 }}>Создать</Button>
        </Grid>
      </form>
      <Link to={"/admin/exams"}>
        <Button style={{ width: 100, marginTop: 30 }}>Назад</Button>
      </Link>
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/create/exam")({
  component: CreateExamPage,
});
