import { Link, createLazyFileRoute } from "@tanstack/react-router";
import UsersDataGrid from "@components/dataGrids/users";
import { Button } from "@mui/material";

const UsersPage = () => {
  return (
    <div>
      <UsersDataGrid />
      <Link to="/admin/create/user">
        <Button variant="outlined" sx={{ width: "100%" }}>
          +
        </Button>
      </Link>
    </div>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/users")({
  component: UsersPage,
});
