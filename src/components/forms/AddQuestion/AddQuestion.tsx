import { CreateQuestionRequest, ThemesService } from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import { Checkbox, Grid, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function AddQuestion(props: { theme_id: string }) {
  const form = useForm<CreateQuestionRequest>({
    defaultValues: { theme_id: props.theme_id, is_task_question: false },
  });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: CreateQuestionRequest) =>
      ThemesService.addQuestionThemesQuestionsPost({ requestBody: data }),
    onSuccess: () => navigate({ to: "/teacher/exams" }),
  });
  const onSubmit = form.handleSubmit(
    (data) => mutation.mutate(data),
    () => Store.addNotification(formDataError),
  );
  return (
    <form onSubmit={onSubmit}>
      <h4>Добавить вопрос</h4>
      <Grid container>
        <Grid item>
          <TextField
            label="Текст"
            {...form.register("name", {
              required: true,
              pattern: { value: /^[^\s]+(?:$|.*[^\s]+$)/, message: "Ошибка" },
            })}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox {...form.register("is_task_question")} /> повышенной
            сложности
          </div>
        </Grid>
        <Button type="submit">Добавить</Button>
      </Grid>
    </form>
  );
}
