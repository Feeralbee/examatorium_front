import { Link, createLazyFileRoute } from "@tanstack/react-router";
import QualificationsDataGrid from "@components/dataGrids/qualifications";
import { Button } from "@mui/material";

const QualificationsPage = () => {
  return (
    <div>
      <QualificationsDataGrid />
      <Link to="/admin/create/qualification">
        <Button variant="outlined" sx={{ width: "100%" }}>
          +
        </Button>
      </Link>
    </div>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/qualifications")({
  component: QualificationsPage,
});
