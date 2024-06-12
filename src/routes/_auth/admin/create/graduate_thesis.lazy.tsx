import {
  CreateGraduateThesisRequest,
  GraduateThesesService,
  GroupsService,
} from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import queryKeys from "@misc/queryKeys";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Controller, SubmitErrorHandler, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

const CreateGraduateThesisPage = () => {
  const form = useForm<CreateGraduateThesisRequest>();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: CreateGraduateThesisRequest) =>
      GraduateThesesService.createGraduateThesesPost({ requestBody: data }),
    onSuccess: () => navigate({ to: "/admin/graduate_theses" }),
  });
  const onError: SubmitErrorHandler<CreateGraduateThesisRequest> = () =>
    Store.addNotification(formDataError);
  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  }, onError);

  const groupsQuery = useQuery({
    queryKey: queryKeys.allGroups,
    queryFn: () => GroupsService.allGroupsGroupsAllGet(),
    initialData: [],
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Создание ВКР</h1>
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
          <Button style={{ width: 150 }}>Создать</Button>
        </Grid>
      </form>
      <Link to={"/admin/graduate_theses"}>
        <Button style={{ width: 100, marginTop: 30 }}>Назад</Button>
      </Link>
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/create/graduate_thesis")(
  {
    component: CreateGraduateThesisPage,
  },
);
