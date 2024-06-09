import {
  UpdateQualificationRequest,
  QualificationsService,
  CompetenciesService,
  QualificationDomainEntity,
} from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import queryKeys from "@misc/queryKeys";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function EditQualiciation({
  search,
}: {
  search: QualificationDomainEntity;
}) {
  const form = useForm<{
    data: UpdateQualificationRequest;
    competencies: [string];
  }>({
    defaultValues: {
      data: search,
      competencies: search.competencies.map((competence) => competence.id),
    },
  });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (result: {
      data: UpdateQualificationRequest;
      competencies: [string];
    }) =>
      QualificationsService.updateQualificationsPatch({ requestBody: result }),
    onSuccess: () => navigate({ to: "/admin/qualifications" }),
  });
  const competenciesQuery = useQuery({
    queryKey: queryKeys.allCompetencies,
    queryFn: () => CompetenciesService.allCompetenciesAllGet(),
    initialData: [],
  });
  const onSubmit = form.handleSubmit(
    (data) => mutation.mutate(data),
    () => Store.addNotification(formDataError),
  );
  return (
    <form onSubmit={onSubmit}>
      <h2>Редактирование квалификации</h2>
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
            {...form.register("data.index", {
              required: true,
              pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
            })}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Название*"
            {...form.register("data.name", {
              required: true,
              pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
            })}
          />
        </Grid>
        <Grid item>
          <Controller
            control={form.control}
            name="competencies"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                label="Компетенции*"
                select
                SelectProps={{
                  multiple: true,
                }}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                sx={{ minWidth: 100 }}
              >
                {competenciesQuery.data.map((value) => (
                  <MenuItem key={value.id} value={`${value.id}`}>
                    {value.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        <Button style={{ width: 150 }}>Подтвердить</Button>
      </Grid>
    </form>
  );
}
