import { ThemesService, CreateThemeRequest, ExamsService } from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import queryKeys from "@misc/queryKeys";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Controller, SubmitErrorHandler, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

const CreateThemePage = () => {
  const form = useForm<CreateThemeRequest>();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: CreateThemeRequest) =>
      ThemesService.createThemesPost({ requestBody: data }),
    onSuccess: () => navigate({ to: "/admin/themes" }),
  });
  const onError: SubmitErrorHandler<CreateThemeRequest> = () =>
    Store.addNotification(formDataError);
  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  }, onError);
  const examsQuery = useQuery({
    queryKey: queryKeys.allExams,
    queryFn: () => ExamsService.allExamsAllGet(),
    initialData: [],
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Создание темы</h1>
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
            <Controller
              control={form.control}
              name="exam_id"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  label="Экзамен*"
                  select
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  sx={{ width: 150 }}
                >
                  {examsQuery.data.map((value) => (
                    <MenuItem key={value.id} value={`${value.id}`}>
                      {`${value.discipline.name}, ${value.teacher.surname}, ${value.group.name}, ${value.semester} семестр`}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Grid>
          <Button style={{ width: 150 }}>Создать</Button>
        </Grid>
      </form>
      <Link to={"/admin/themes"}>
        <Button style={{ width: 100, marginTop: 30 }}>Назад</Button>
      </Link>
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/create/theme")({
  component: CreateThemePage,
});
