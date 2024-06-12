import EducationalPracticesDataGrid from "@components/dataGrids/educational_practices";
import { Button } from "@mui/material";
import { Link, createLazyFileRoute } from "@tanstack/react-router";

const EducationalPracticesPage = () => {
  return (
    <div>
      <EducationalPracticesDataGrid />
      <Link to="/admin/create/educational_practice">
        <Button variant="outlined" sx={{ width: "100%" }}>
          +
        </Button>
      </Link>
    </div>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/educational_practices")({
  component: EducationalPracticesPage,
});
