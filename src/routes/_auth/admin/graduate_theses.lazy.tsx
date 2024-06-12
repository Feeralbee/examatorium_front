import GraduateThesesDataGrid from "@components/dataGrids/graduate_theses";
import { Button } from "@mui/material";
import { Link, createLazyFileRoute } from "@tanstack/react-router";

const GraduateThesesPage = () => {
  return (
    <div>
      <GraduateThesesDataGrid />
      <Link to="/admin/create/graduate_thesis">
        <Button variant="outlined" sx={{ width: "100%" }}>
          +
        </Button>
      </Link>
    </div>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/graduate_theses")({
  component: GraduateThesesPage,
});
