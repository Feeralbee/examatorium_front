import {
  GroupsService,
  UsersService,
  UpdateGraduateThesisRequest,
  GraduateThesesService,
} from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import queryKeys from "@misc/queryKeys";
import { Grid, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function EditGraduateThesis({
  search,
}: {
  search: UpdateGraduateThesisRequest;
}) {
  const form = useForm<UpdateGraduateThesisRequest>({ defaultValues: search });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (userData: UpdateGraduateThesisRequest) =>
      GraduateThesesService.updateGraduateThesesPatch({
        requestBody: userData,
      }),
    onSuccess: () => navigate({ to: "/admin/graduate_theses" }),
  });
  const onSubmit = form.handleSubmit(
    (data) => mutation.mutate(data),
    () => Store.addNotification(formDataError),
  );
  const groupsQuery = useQuery({
    queryKey: queryKeys.allGroups,
    queryFn: () => GroupsService.allGroupsGroupsAllGet(),
    initialData: [],
  });

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
          <Controller
            control={form.control}
            name="group_id"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                label="Группа*"
                select
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                sx={{ width: 150 }}
              >
                {groupsQuery.data.map((value) => (
                  <MenuItem key={value.id} value={`${value.id}`}>
                    {value.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        <Button type="submit" style={{ width: 150 }}>
          Подтвердить
        </Button>
      </Grid>
    </form>
  );
}
