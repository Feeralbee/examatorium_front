import {
  EducationalPracticesService,
  UpdateEducationalPracticeRequest,
} from "@client";
import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import ButtonElement from "@components/Button";
import { EditEducationalPractice } from "@components/info/educational_practice";

const EducationalPracticeInfoPage = () => {
  const search: UpdateEducationalPracticeRequest = Route.useSearch();
  const navigate = useNavigate();
  const deleteMutation = useMutation({
    mutationFn: () =>
      EducationalPracticesService.deleteEducationalPracticesEducationalPracticeIdDelete(
        {
          educationalPracticeId: search.id,
        },
      ),
    onSuccess: () => navigate({ to: "/admin/educational_practices" }),
  });
  return (
    <>
      <h1>{search.name}</h1>
      <EditEducationalPractice search={search} />
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

export const Route = createLazyFileRoute(
  "/_auth/admin/info/educational_practice",
)({
  component: EducationalPracticeInfoPage,
});
