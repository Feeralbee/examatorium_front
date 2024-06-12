import {
  GroupsService,
  UsersService,
  UpdateCourseWorkRequest,
  DisciplinesService,
  CourseWorksService,
} from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import queryKeys from "@misc/queryKeys";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function EditCourseWork({
  search,
}: {
  search: UpdateCourseWorkRequest;
}) {
  const form = useForm<UpdateCourseWorkRequest>({ defaultValues: search });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (userData: UpdateCourseWorkRequest) =>
      CourseWorksService.updateCourseWorksPatch({
        requestBody: userData,
      }),
    onSuccess: () => navigate({ to: "/admin/course_works" }),
  });
  const onSubmit = form.handleSubmit(
    (data) => mutation.mutate(data),
    () => Store.addNotification(formDataError),
  );
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
  const disciplinesQuery = useQuery({
    queryKey: queryKeys.allDisciplines,
    queryFn: () => DisciplinesService.allDisciplinesAllGet(),
    initialData: [],
  });

  return (
    <form onSubmit={onSubmit}>
      <h2>Редактирование</h2>
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
        <Grid item>
          <Controller
            control={form.control}
            name="discipline_id"
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
                {disciplinesQuery.data.map((value) => (
                  <MenuItem key={value.id} value={`${value.id}`}>
                    {`${value.index} ${value.name}`}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        <Button type="submit" style={{ width: 150 }}>
          Подтвердить
        </Button>
      </Grid>
    </form>
  );
}
