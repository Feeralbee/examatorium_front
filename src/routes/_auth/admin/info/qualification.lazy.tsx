import { QualificationsService, UpdateQualificationRequest } from "@client";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import ButtonElement from "@components/Button";
import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { EditQualiciation } from "@components/info/qualification";

const QualificationInfoPage = () => {
  const search: UpdateQualificationRequest = Route.useSearch();
  const navigate = useNavigate();
  const deleteMutation = useMutation({
    mutationFn: () =>
      QualificationsService.deleteQualificationsQualificationIdDelete({
        qualificationId: search.id,
      }),
    onSuccess: () => navigate({ to: "/admin/qualifications" }),
  });
  return (
    <>
      <h1>{`${search.index} ${search.name}`}</h1>
      <EditQualiciation search={search} />
      <Link to={"/admin/qualifications"}>
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
export const Route = createLazyFileRoute("/_auth/admin/info/qualification")({
  component: QualificationInfoPage,
});
