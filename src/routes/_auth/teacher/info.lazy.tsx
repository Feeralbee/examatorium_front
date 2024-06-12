import { ExamsService } from "@client";
import AddQuestion from "@components/forms/AddQuestion";
import DeleteQuestion from "@components/forms/DeleteQuestion";
import { useQuery } from "@tanstack/react-query";
import { Link, createLazyFileRoute } from "@tanstack/react-router";

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
      {!themesQuery.data?.filter((value) => value.questions.length === 0)
        .length &&
        themesQuery.data?.length && (
          <Link to="/teacher/tickets">Перейти к созданию билетов</Link>
        )}
      <h2>Темы</h2>
      {themesQuery.data.length ? (
        themesQuery.data.map((theme, index) => (
          <>
            <Link to="/teacher/theme_info" search={theme} key={index}>
              {theme.name}
            </Link>
            <br />
            <br />
          </>
        ))
      ) : (
        <p>Темы ещё не созданы</p>
      )}
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/teacher/info")({
  component: InfoPage,
});
