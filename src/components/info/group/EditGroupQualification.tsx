import {
  GroupsService,
  QualificationsService,
  UpdateGroupRequest,
} from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import queryKeys from "@misc/queryKeys";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function EditGroupQualification({
  search,
}: {
  search: UpdateGroupRequest;
}) {
  const navigate = useNavigate();
  const qualificationsQuery = useQuery({
    queryKey: queryKeys.allQualifications,
    queryFn: () => QualificationsService.allQualificationsAllGet(),
    initialData: [],
  });
  const mutation = useMutation({
    mutationFn: (data: UpdateGroupRequest) =>
      GroupsService.updateGroupsPatch({ requestBody: data }),
    onSuccess: () => navigate({ to: "/admin/groups" }),
  });
  const form = useForm<UpdateGroupRequest>({
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
        <Controller
          control={form.control}
          name="qualification_id"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextField
              label="Квалификация"
              select
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
              sx={{ minWidth: 150 }}
            >
              {qualificationsQuery.data.map((qualification) => (
                <MenuItem key={qualification.id} value={`${qualification.id}`}>
                  {`${qualification.index} ${qualification.name}`}
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
