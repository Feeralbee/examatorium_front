import {
  QualificationsService,
  CreateQualificationRequest,
  CompetenciesService,
} from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import queryKeys from "@misc/queryKeys";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Controller, SubmitErrorHandler, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

const CreateQualificationPage = () => {
  const form = useForm<{
    qualification: CreateQualificationRequest;
    competencies: string[];
  }>({
    defaultValues: { competencies: [] },
  });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (result: {
      qualificationData: CreateQualificationRequest;
      competencies: string[];
    }) =>
      QualificationsService.createQualificationsPost({
        requestBody: {
          data: result.qualificationData,
          competencies: result.competencies,
        },
      }),
    onSuccess: () => navigate({ to: "/admin/qualifications" }),
  });
  const competenciesQuery = useQuery({
    queryKey: queryKeys.allCompetencies,
    queryFn: () => CompetenciesService.allCompetenciesAllGet(),
    initialData: [],
  });
  const onError: SubmitErrorHandler<CreateQualificationRequest> = () =>
    Store.addNotification(formDataError);
  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate({
      qualificationData: data.qualification,
      competencies: data.competencies,
    });
  }, onError);

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Создание квалификации</h1>
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
              {...form.register("qualification.index", {
                required: true,
                pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
              })}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Название*"
              {...form.register("qualification.name", {
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
          <Button style={{ width: 150 }}>Создать</Button>
        </Grid>
      </form>
      <Link to={"/admin/qualifications"}>
        <Button style={{ width: 100, marginTop: 30 }}>Назад</Button>
      </Link>
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/create/qualification")({
  component: CreateQualificationPage,
});
