import { UpdateGroupRequest, GroupsService } from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import { Grid, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function EditGroup({ search }: { search: UpdateGroupRequest }) {
  const form = useForm<UpdateGroupRequest>({ defaultValues: search });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (userData: UpdateGroupRequest) =>
      GroupsService.updateGroupsPatch({ requestBody: userData }),
    onSuccess: () => navigate({ to: "/admin/groups" }),
  });
  const onSubmit = form.handleSubmit(
    (data) => mutation.mutate(data),
    () => Store.addNotification(formDataError),
  );
  return (
    <form onSubmit={onSubmit}>
      <h2>Редактирование</h2>
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
          <TextField
            label="Специальность*"
            {...form.register("speciality", {
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
