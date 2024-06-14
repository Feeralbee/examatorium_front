import {
  DisciplinesService,
  ExamsService,
  GroupsService,
  UpdateExamRequest,
  UsersService,
} from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import queryKeys from "@misc/queryKeys";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function EditExam({ search }: { search: UpdateExamRequest }) {
  const form = useForm<UpdateExamRequest>({ defaultValues: search });
  const navigate = useNavigate();
  const groupsQuery = useQuery({
    queryKey: queryKeys.allGroups,
    queryFn: () => GroupsService.allGroupsGroupsAllGet(),
    initialData: [],
  });
  const disciplinesQuery = useQuery({
    queryKey: queryKeys.allDisciplines,
    queryFn: () => DisciplinesService.allDisciplinesAllGet(),
    initialData: [],
  });
  const usersQuery = useQuery({
    queryKey: queryKeys.allUsers,
    queryFn: () => UsersService.getAllUsersUsersAllGet(),
    select: (data) => data.filter((user) => user.role === "teacher"),
    initialData: [],
  });
  const mutation = useMutation({
    mutationFn: (data: UpdateExamRequest) =>
      ExamsService.updateExamsPatch({ requestBody: data }),
    onSuccess: () => navigate({ to: "/admin/exams" }),
  });
  const onSubmit = form.handleSubmit(
    (data) => mutation.mutate(data),
    () => Store.addNotification(formDataError),
  );
  return (
    <form onSubmit={onSubmit}>
      <h2>Редактирование экзамена</h2>
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
            name="group_id"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                label="Группа"
                select
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                sx={{ width: 150 }}
              >
                {groupsQuery.data.map((group) => (
                  <MenuItem key={group.id} value={`${group.id}`}>
                    {group.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            control={form.control}
            name="discipline_id"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                label="Дисциплина"
                select
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                sx={{ width: 150 }}
              >
                {disciplinesQuery.data.map((discipline) => (
                  <MenuItem key={discipline.id} value={`${discipline.id}`}>
                    {`${discipline.index} ${discipline.name}`}
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
                label="Преподаватель"
                select
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                sx={{ width: 150 }}
              >
                {usersQuery.data.map((teacher) => (
                  <MenuItem key={teacher.id} value={`${teacher.id}`}>
                    {`${teacher.surname} ${teacher.name} ${teacher.patronymic ?? ""}`}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        <Grid item>
          <TextField
            type="number"
            label={"Семестр"}
            sx={{ width: 100 }}
            {...form.register("semester", {
              required: true,
              min: 1,
              valueAsNumber: true,
            })}
          />
        </Grid>
        <Button type="submit">Изменить</Button>
      </Grid>
    </form>
  );
}
