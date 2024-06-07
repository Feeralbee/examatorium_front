import DisciplinesDataGrid from "@components/dataGrids/disciplines";
import { Button } from "@mui/material";
import { Link, createLazyFileRoute } from "@tanstack/react-router";

const DisciplinesPage = () => {
  return (
    <div>
      <DisciplinesDataGrid />
      <Link to="/admin/create/discipline">
        <Button variant="outlined" sx={{ width: "100%" }}>
          +
        </Button>
      </Link>
    </div>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/disciplines")({
  component: DisciplinesPage,
});
