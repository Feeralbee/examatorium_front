import { Link, createLazyFileRoute } from "@tanstack/react-router";
import ThemesDataGrid from "@components/dataGrids/themes";
import { Button } from "@mui/material";

const ThemesPage = () => {
  return (
    <div>
      <ThemesDataGrid />
      <Link to="/admin/create/theme">
        <Button variant="outlined" sx={{ width: "100%" }}>
          +
        </Button>
      </Link>
    </div>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/themes")({
  component: () => <ThemesPage />,
});
