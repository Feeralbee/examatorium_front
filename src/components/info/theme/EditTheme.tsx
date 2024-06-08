import { UpdateThemeRequest, ThemesService } from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import { Grid, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function EditTheme({ search }: { search: UpdateThemeRequest }) {
  const form = useForm<UpdateThemeRequest>({ defaultValues: search });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: UpdateThemeRequest) =>
      ThemesService.updateThemesPatch({ requestBody: data }),
    onSuccess: () => navigate({ to: "/admin/themes" }),
  });
  const onSubmit = form.handleSubmit(
    (data) => mutation.mutate(data),
    () => Store.addNotification(formDataError),
  );
  return (
    <form onSubmit={onSubmit}>
      <h2>Редактирование названия</h2>
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
        <Button type="submit" style={{ width: 150 }}>
          Подтвердить
        </Button>
      </Grid>
    </form>
  );
}
