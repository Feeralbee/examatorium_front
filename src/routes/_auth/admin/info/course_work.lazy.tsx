import { CourseWorksService, UpdateCourseWorkRequest } from "@client";
import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import ButtonElement from "@components/Button";
import { EditCourseWork } from "@components/info/course_work";

const CourseWorkInfoPage = () => {
  const search: UpdateCourseWorkRequest = Route.useSearch();
  const navigate = useNavigate();
  const deleteMutation = useMutation({
    mutationFn: () =>
      CourseWorksService.deleteCourseWorksCourseWorkIdDelete({
        courseWorkId: search.id,
      }),
    onSuccess: () => navigate({ to: "/admin/course_works" }),
  });
  return (
    <>
      <h1>Курсовая работа</h1>
      <EditCourseWork search={search} />
      <Link to={"/admin/course_works"}>
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

export const Route = createLazyFileRoute("/_auth/admin/info/course_work")({
  component: CourseWorkInfoPage,
});
