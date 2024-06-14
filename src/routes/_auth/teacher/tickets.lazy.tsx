import {
  ExamsService,
  OpenAPI,
  QuestionDomainEntity,
  ThemeDomainEntity,
} from "@client";
import Button from "@components/Button";
import { Grid, TextField } from "@mui/material";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

export const Route = createLazyFileRoute("/_auth/teacher/tickets")({
  component: () => {
    const search = Route.useSearch();
    console.log(search);
    let themes: ThemeDomainEntity[] = [];
    for (let i in search) {
      themes.push(search[i]);
    }
    const questions = themes.reduce<QuestionDomainEntity[]>(
      (accum, value) => [...accum, ...value.questions],
      [],
    );
    const maxQuestionsCount = questions.length;
    const maxTaskQuestionsCount = questions.filter(
      (value) => value.is_task_question,
    ).length;
    const form = useForm<{
      examId: string;
      ticketsCount: number;
      questionsCount: number;
      taskQuestionsCount: number;
    }>({
      defaultValues: {
        examId: themes[0]?.exam_id,
        questionsCount: 0,
        taskQuestionsCount: 0,
        ticketsCount: 0,
      },
    });
    const onSubmit = form.handleSubmit(
      (data) => {
        window.open(
          `${OpenAPI.BASE}/exams/tickets?exam_id=${data.examId}&tickets_count=${data.ticketsCount}&questions_count=${data.questionsCount}&task_questions_count=${data.taskQuestionsCount}`,
        );
      },
      (data) => {
        console.log(data);
      },
    );
    return (
      <>
        <form onSubmit={onSubmit}>
          <h1>Получить билеты</h1>
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
                type="number"
                label="Количество билетов"
                {...form.register("ticketsCount", {
                  required: true,
                  valueAsNumber: true,
                  min: 1,
                })}
              />
            </Grid>
            <Grid item>
              <TextField
                type="number"
                label="Количество вопросов в билете"
                {...form.register("questionsCount", {
                  required: true,
                  valueAsNumber: true,
                  min: 1,
                  max: maxQuestionsCount,
                })}
              />
            </Grid>
            <Grid item>
              <TextField
                type="number"
                label="Количество сложных вопросов в билете"
                {...form.register("taskQuestionsCount", {
                  required: true,
                  valueAsNumber: true,
                  min: 0,
                  max: maxTaskQuestionsCount,
                  deps: "questionsCount",
                  validate: (value, formValues) =>
                    value <= formValues.questionsCount,
                })}
              />
            </Grid>
            <Button>Получить</Button>
          </Grid>
        </form>
      </>
    );
  },
});
