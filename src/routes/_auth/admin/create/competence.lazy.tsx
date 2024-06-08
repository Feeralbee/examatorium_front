import { CompetenciesService, CreateCompetenceRequest } from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Controller, SubmitErrorHandler, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

const CreateCompetencePage = () => {
  const form = useForm<CreateCompetenceRequest>({
    defaultValues: { type: "general" },
  });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: CreateCompetenceRequest) =>
      CompetenciesService.createCompetenciesPost({ requestBody: data }),
    onSuccess: () => navigate({ to: "/admin/competencies" }),
  });
  const onError: SubmitErrorHandler<CreateCompetenceRequest> = () =>
    Store.addNotification(formDataError);
  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  }, onError);

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Создание компетенции</h1>
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
          <Grid item xs={2}>
            <TextField
              label="Индекс*"
              {...form.register("index", {
                required: true,
                pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
              })}
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
          <Grid item>
            <Controller
              control={form.control}
              name="type"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  label="Роль*"
                  select
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                >
                  <MenuItem value="general">Общая</MenuItem>
                  <MenuItem value="professional">Профессиональная</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Button style={{ width: 150 }}>Создать</Button>
        </Grid>
      </form>
      <Link to={"/admin/competencies"}>
        <Button style={{ width: 100, marginTop: 30 }}>Назад</Button>
      </Link>
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/create/competence")({
  component: CreateCompetencePage,
});
