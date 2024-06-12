import CourseWorksDataGrid from "@components/dataGrids/course_works/CourseWorksDataGrid";
import { Button } from "@mui/material";
import { Link, createLazyFileRoute } from "@tanstack/react-router";

const CourseWorkPage = () => {
  return (
    <div>
      <CourseWorksDataGrid />
      <Link to="/admin/create/course_work">
        <Button variant="outlined" sx={{ width: "100%" }}>
          +
        </Button>
      </Link>
    </div>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/course_works")({
  component: CourseWorkPage,
});
