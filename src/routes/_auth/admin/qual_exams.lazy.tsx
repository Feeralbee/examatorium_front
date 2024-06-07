import { Link, createLazyFileRoute } from "@tanstack/react-router";
import QualExamsDataGrid from "@components/dataGrids/qual_exams";
import { Button } from "@mui/material";

const QualExamsPage = () => {
  return (
    <div>
      <QualExamsDataGrid />
      <Link to="/admin/create/qual_exam">
        <Button variant="outlined" sx={{ width: "100%" }}>
          +
        </Button>
      </Link>
    </div>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/qual_exams")({
  component: QualExamsPage,
});
