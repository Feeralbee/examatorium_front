import { ExamsService } from "@client";
import AddQuestion from "@components/forms/AddQuestion";
import DeleteQuestion from "@components/forms/DeleteQuestion";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

const InfoPage = () => {
  const search = Route.useSearch();
  const themesQuery = useQuery({
    queryKey: ["exam_themes"],
    queryFn: () =>
      ExamsService.examQuestionsExamsQuestionsGet({ examId: search.id }),
    initialData: [],
  });
  return (
    <>
      <h1>Экзамен</h1>
      <h2>Информация</h2>
      <p>Предмет: {`${search.discipline.index} ${search.discipline.name}`}</p>
      <p>Группа: {search.group.name}</p>
      <p>
        Преподаватель:{" "}
        {`${search.teacher.surname} ${search.teacher.name} ${search.teacher.patronymic ?? ""}`}
      </p>
      <p>Семместр: {search.semester}</p>
      <h2>Темы и вопросы</h2>
      {themesQuery.data.map((theme, index) => (
        <>
          <h3 key={index}>{theme.name}</h3>
          {theme.questions.length ? (
            theme.questions.map((question, index) => (
              <p
                key={index}
              >{`${index + 1}) ${question.name} - ${question.is_task_question ? "усложенный вопрос" : "вопрос обычной сложности"}`}</p>
            ))
          ) : (
            <p>Вопросы ещё не заданы</p>
          )}
          <AddQuestion theme_id={theme.id} themesQuery={themesQuery} />
          <DeleteQuestion
            themesQuery={themesQuery}
            questions={theme.questions}
          />
        </>
      ))}
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/teacher/info")({
  component: InfoPage,
});
