import { GroupsService, UpdateUserRequest } from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import queryKeys from "@misc/queryKeys";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function AddToGroup({ search }: { search: UpdateUserRequest }) {
  const navigate = useNavigate();
  const groupsQuery = useQuery({
    queryKey: queryKeys.allGroups,
    queryFn: () => GroupsService.allGroupsGroupsAllGet(),
    initialData: [],
  });
  const studentGroupQuery = useQuery({
    queryKey: queryKeys.studentGroup,
    queryFn: () =>
      GroupsService.studentGroupGroupsStudentGroupGet({ studentId: search.id }),
  });
  const addToGroupmutation = useMutation({
    mutationFn: (data: { studentId: string; groupId: string }) =>
      GroupsService.addStudentGroupsAddStudentPost(data),
    onSuccess: () => {
      navigate({ to: "/admin/users" });
    },
  });
  const deleteGroupmutation = useMutation({
    mutationFn: (data: { studentId: string }) =>
      GroupsService.removeStudentGroupsRemoveStudentPost(data),
    onSuccess: () => {
      navigate({ to: "/admin/users" });
    },
  });
  const form = useForm<{ studentId: string; groupId: string }>({
    defaultValues: {
      studentId: search.id,
    },
  });
  const onSubmit = form.handleSubmit(
    (data) => {
      addToGroupmutation.mutate(data);
    },
    () => {
      Store.addNotification(formDataError);
    },
  );
  return (
    <form onSubmit={onSubmit}>
      <h2>Изменить группу</h2>
      Текущая группа:{" "}
      {studentGroupQuery.isLoading
        ? "Получение данных..."
        : studentGroupQuery.data?.name ?? "не выбрано"}
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
        <Controller
          control={form.control}
          name="groupId"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextField
              label="Группа"
              select
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
              sx={{ minWidth: 150 }}
            >
              {groupsQuery.data.map((group) => (
                <MenuItem key={group.id} value={`${group.id}`}>
                  {group.name}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Button type="submit">Подтвердить</Button>
        <Button
          hidden={
            studentGroupQuery.data?.id ||
            studentGroupQuery.isLoading ||
            studentGroupQuery.isFetching
              ? false
              : true
          }
          type="button"
          onClick={() => deleteGroupmutation.mutate({ studentId: search.id })}
        >
          Удалить из группы
        </Button>
      </Grid>
    </form>
  );
}
