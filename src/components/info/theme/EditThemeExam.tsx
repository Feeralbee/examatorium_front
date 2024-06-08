import { ExamsService, ThemesService, UpdateThemeRequest } from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import queryKeys from "@misc/queryKeys";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function EditThemeExam({
  search,
}: {
  search: UpdateThemeRequest;
}) {
  const navigate = useNavigate();
  const examsQuery = useQuery({
    queryKey: queryKeys.allExams,
    queryFn: () => ExamsService.allExamsAllGet(),
    initialData: [],
  });
  const mutation = useMutation({
    mutationFn: (data: UpdateThemeRequest) =>
      ThemesService.updateThemesPatch({ requestBody: data }),
    onSuccess: () => navigate({ to: "/admin/disciplines" }),
  });
  const form = useForm<UpdateThemeRequest>({
    defaultValues: search,
  });
  const onSubmit = form.handleSubmit(
    (data) => {
      mutation.mutate(data);
    },
    () => {
      Store.addNotification(formDataError);
    },
  );
  return (
    <form onSubmit={onSubmit}>
      <h2>Редактирование дисциплины</h2>
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
          name="exam_id"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextField
              label="Экзамен"
              select
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
              sx={{ width: 150 }}
            >
              {examsQuery.data.map((exam) => (
                <MenuItem key={exam.id} value={`${exam.id}`}>
                  {`${exam.discipline.name}, ${exam.teacher.surname}, ${exam.group.name}, ${exam.semester} семестр`}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Button type="submit">Подтвердить</Button>
      </Grid>
    </form>
  );
}
