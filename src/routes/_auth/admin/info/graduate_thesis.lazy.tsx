import { GraduateThesesService, UpdateGraduateThesisRequest } from "@client";
import { EditGraduateThesis } from "@components/info/graduate_thesis";
import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import ButtonElement from "@components/Button";

const GraduateThesisInfoPage = () => {
  const search: UpdateGraduateThesisRequest = Route.useSearch();
  const navigate = useNavigate();
  const deleteMutation = useMutation({
    mutationFn: () =>
      GraduateThesesService.deleteGraduateThesesCourseWorkIdDelete({
        graduateThesisId: search.id,
      }),
    onSuccess: () => navigate({ to: "/admin/graduate_theses" }),
  });
  return (
    <>
      <h1>Выпускная квалификационная работа</h1>
      <EditGraduateThesis search={search} />
      <Link to={"/admin/educational_practices"}>
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

export const Route = createLazyFileRoute("/_auth/admin/info/graduate_thesis")({
  component: GraduateThesisInfoPage,
});
