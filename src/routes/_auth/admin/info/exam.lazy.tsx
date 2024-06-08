import { ExamDomainEntity, ExamsService } from "@client";
import { useMutation } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import ButtonElement from "@components/Button";
import { Button } from "@mui/material";

const ExamInfoPage = () => {
  const search: ExamDomainEntity = Route.useSearch();
  const navigate = useNavigate();
  const deleteMutation = useMutation({
    mutationFn: () =>
      ExamsService.deleteExamsExamIdDelete({
        examId: search.id,
      }),
    onSuccess: () => navigate({ to: "/admin/exams" }),
  });
  return (
    <>
      <h1>Экзамен</h1>
      <p>Предмет: {`${search.discipline.index} ${search.discipline.name}`}</p>
      <p>Группа: {search.group.name}</p>
      <p>
        Преподаватель:{" "}
        {`${search.teacher.surname} ${search.teacher.name} ${search.teacher.patronymic ?? ""}`}
      </p>
      <p>Семместр: {search.semester}</p>
      <Link to={"/admin/exams"}>
        <ButtonElement style={{ width: 100, marginTop: 30, marginRight: 10 }}>
          Назад
        </ButtonElement>
      </Link>
      <Button
        color="error"
        variant="contained"
        onClick={() => deleteMutation.mutate()}
      >
        Удалить
      </Button>
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/info/exam")({
  component: ExamInfoPage,
});
