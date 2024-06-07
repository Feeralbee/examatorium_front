import { Link, createLazyFileRoute } from "@tanstack/react-router";
import ExamsDataGrid from "@components/dataGrids/exams";
import { Button } from "@mui/material";

const ExamsPage = () => {
  return (
    <div>
      <ExamsDataGrid />
      <Link to="/admin/create/exam">
        <Button variant="outlined" sx={{ width: "100%" }}>
          +
        </Button>
      </Link>
    </div>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/exams")({
  component: ExamsPage,
});
