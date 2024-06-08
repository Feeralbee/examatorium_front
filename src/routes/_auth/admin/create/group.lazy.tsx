import {
  QualificationsService,
  GroupsService,
  CreateGroupRequest,
} from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import queryKeys from "@misc/queryKeys";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Controller, SubmitErrorHandler, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

const CreateGroupPage = () => {
  const form = useForm<CreateGroupRequest>();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: CreateGroupRequest) =>
      GroupsService.createGroupsPost({ requestBody: data }),
    onSuccess: () => navigate({ to: "/admin/groups" }),
  });
  const onError: SubmitErrorHandler<CreateGroupRequest> = () =>
    Store.addNotification(formDataError);
  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  }, onError);

  const qualificationsQuery = useQuery({
    queryKey: queryKeys.allGroups,
    queryFn: () => QualificationsService.allQualificationsAllGet(),
    initialData: [],
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Создание группы</h1>
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
              name="qualification_id"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  label="Квалификация*"
                  select
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  sx={{ minWidth: 150 }}
                >
                  {qualificationsQuery.data.map((value) => (
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
            <TextField
              label="Название*"
              {...form.register("name", {
                required: true,
                pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
              })}
            />
          </Grid>
          <Button style={{ width: 150 }}>Создать</Button>
        </Grid>
      </form>
      <Link to={"/admin/groups"}>
        <Button style={{ width: 100, marginTop: 30 }}>Назад</Button>
      </Link>
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/create/group")({
  component: CreateGroupPage,
});
