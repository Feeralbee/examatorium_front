import {
  QuestionDomainEntity,
  ThemeDomainEntity,
  ThemesService,
} from "@client";
import Button from "@components/Button";
import { formDataError } from "@misc/notifies/forms_errors/formDataError";
import { Grid, MenuItem, TextField } from "@mui/material";
import { UseQueryResult, useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { Store } from "react-notifications-component";

export default function DeleteQuestion(props: {
  themesQuery: UseQueryResult<ThemeDomainEntity[]>;
  questions: QuestionDomainEntity[];
}) {
  const form = useForm<{ question_id: string }>();
  const mutation = useMutation({
    mutationFn: (data: string) =>
      ThemesService.deleteQuestionThemesQuestionsDelete({ id: data }),
    onSuccess: () => {
      props.themesQuery.refetch();
      form.reset();
    },
  });
  const onSubmit = form.handleSubmit(
    (data) => mutation.mutate(data.question_id),
    () => Store.addNotification(formDataError),
  );
  return (
    <form onSubmit={onSubmit}>
      <h4>Удалить вопрос</h4>
      <Grid
        container
        sx={{
          gap: 3,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Controller
          control={form.control}
          name="question_id"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextField
              label="Вопрос"
              select
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
              sx={{ width: 150 }}
            >
              {props.questions.map((question) => (
                <MenuItem key={question.id} value={question.id}>
                  {question.name}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Button type="submit">Удалить</Button>
      </Grid>
    </form>
  );
}
