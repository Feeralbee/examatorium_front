import { ThemesService } from "@client";
import AddQuestion from "@components/forms/AddQuestion";
import { useMutation } from "@tanstack/react-query";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/teacher/theme_info")({
  component: () => {
    const search = Route.useSearch();
    const navigate = useNavigate();
    const deleteMutation = useMutation({
      mutationFn: (id: string) =>
        ThemesService.deleteQuestionThemesQuestionsDelete({ id: id }),
      onSuccess: () => navigate({ to: "/teacher/exams" }),
    });
    return (
      <>
        <h1>{search.name}</h1>
        {search.questions.map((value) => (
          <>
            <span key={value.id}>{value.name}</span> -{" "}
            <span>
              {value.is_task_question
                ? "повышенной сложности"
                : "обычный вопрос"}
            </span>{" "}
            <a
              style={{ color: "red" }}
              onClick={() => deleteMutation.mutate(value.id)}
            >
              Удалить
            </a>
            <br />
          </>
        ))}
        <AddQuestion theme_id={search.id} key={search.id} />
      </>
    );
  },
});
