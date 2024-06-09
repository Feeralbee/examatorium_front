import { UpdateCompetenceRequest, CompetenciesService } from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function EditCompetence({
  search,
}: {
  search: UpdateCompetenceRequest;
}) {
  const form = useForm<UpdateCompetenceRequest>({ defaultValues: search });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: UpdateCompetenceRequest) =>
      CompetenciesService.updateCompetenciesPatch({ requestBody: data }),
    onSuccess: () => navigate({ to: "/admin/competencies" }),
  });
  const onSubmit = form.handleSubmit(
    (data) => mutation.mutate(data),
    () => Store.addNotification(formDataError),
  );
  return (
    <form onSubmit={onSubmit}>
      <h2>Редактирование компетенции</h2>
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
        <Grid item>
          <Controller
            control={form.control}
            name="type"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                label="Тип"
                select
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                sx={{ width: 150 }}
              >
                <MenuItem value={"general"}>Общая</MenuItem>
                <MenuItem value={"professional"}>Профессиональная</MenuItem>
              </TextField>
            )}
          />
        </Grid>
        <Button style={{ width: 150 }}>Подтвердить</Button>
      </Grid>
    </form>
  );
}
