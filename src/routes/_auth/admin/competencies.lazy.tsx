import CompetenciesDataGrid from "@components/dataGrids/competencies";
import { Button } from "@mui/material";
import { Link, createLazyFileRoute } from "@tanstack/react-router";

const CompetenciesPage = () => {
  return (
    <div>
      <CompetenciesDataGrid />
      <Link to="/admin/create/competence">
        <Button variant="outlined" sx={{ width: "100%" }}>
          +
        </Button>
      </Link>
    </div>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/competencies")({
  component: CompetenciesPage,
});
