import { DisciplinesService, UpdateDisciplineRequest } from "@client";
import { EditDiscipline } from "@components/info/discipline";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import ButtonElement from "@components/Button";
import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";

const DisciplineInfoPage = () => {
  const search: UpdateDisciplineRequest = Route.useSearch();
  const navigate = useNavigate();
  const deleteMutation = useMutation({
    mutationFn: () =>
      DisciplinesService.deleteDisciplinesDisciplineIdDelete({
        disciplineId: search.id,
      }),
    onSuccess: () => navigate({ to: "/admin/disciplines" }),
  });
  return (
    <>
      <h1>
        {search.index} {search.name}
      </h1>
      <EditDiscipline search={search} />
      <Link to={"/admin/disciplines"}>
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

export const Route = createLazyFileRoute("/_auth/admin/info/discipline")({
  component: DisciplineInfoPage,
});
