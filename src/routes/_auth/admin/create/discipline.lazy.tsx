import { DisciplinesService, CreateDisciplineRequest } from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import { Grid, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

const CreateDisciplinePage = () => {
  const form = useForm<CreateDisciplineRequest>();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: CreateDisciplineRequest) =>
      DisciplinesService.createDisciplinesPost({ requestBody: data }),
    onSuccess: () => navigate({ to: "/admin/disciplines" }),
  });
  const onError: SubmitErrorHandler<CreateDisciplineRequest> = () =>
    Store.addNotification(formDataError);
  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  }, onError);

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Создание дисциплины</h1>
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
          <Button style={{ width: 150 }}>Создать</Button>
        </Grid>
      </form>
      <Link to={"/admin/disciplines"}>
        <Button style={{ width: 100, marginTop: 30 }}>Назад</Button>
      </Link>
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/create/discipline")({
  component: CreateDisciplinePage,
});
