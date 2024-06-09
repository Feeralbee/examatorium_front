import { CompetenciesService, UpdateCompetenceRequest } from "@client";
import { EditCompetence } from "@components/info/competence";
import { Button } from "@mui/material";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import ButtonElement from "@components/Button";
import { useMutation } from "@tanstack/react-query";

const CompetencePage = () => {
  const search: UpdateCompetenceRequest = Route.useSearch();
  const navigate = useNavigate();
  const deleteMutation = useMutation({
    mutationFn: () =>
      CompetenciesService.deleteCompetenciesCompetenceIdDelete({
        competenceId: search.id,
      }),
    onSuccess: () => navigate({ to: "/admin/competencies" }),
  });
  return (
    <>
      <h1>{`${search.index} ${search.name}`}</h1>
      <EditCompetence search={search} />
      <Link to={"/admin/competencies"}>
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
export const Route = createLazyFileRoute("/_auth/admin/info/competence")({
  component: CompetencePage,
});
