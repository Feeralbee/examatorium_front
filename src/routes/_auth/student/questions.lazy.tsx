import { ExamsService } from "@client";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

const QuestionsPage = () => {
  const search: { exam_id: string } = Route.useSearch();
  const query = useQuery({
    queryKey: ["exam_questions"],
    queryFn: () =>
      ExamsService.examQuestionsExamsQuestionsGet({ examId: search.exam_id }),
    initialData: [],
  });
  const questions_length = query.data.reduce<number>(
    (accum, current) => accum + current.questions.length,
    0,
  );
  if (!questions_length || !query.data.length) {
    return (
      <>
        <h1>Вопросы к экзамену</h1>
        <h2>Вопросы пока не добавлены преподавателем</h2>
      </>
    );
  }
  return (
    <>
      <h1>Вопросы к экзамену</h1>
      {query.data.map((theme, index) => (
        <>
          <h2 key={index}>{theme.name}</h2>
          {theme.questions.map((question, index) => (
            <p key={index}>{question.name}</p>
          ))}
        </>
      ))}
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/student/questions")({
  component: QuestionsPage,
});
