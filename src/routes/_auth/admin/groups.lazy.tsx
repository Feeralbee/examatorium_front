import { Link, createLazyFileRoute } from "@tanstack/react-router";
import GroupsDataGrid from "@components/dataGrids/groups";
import { Button } from "@mui/material";

const GroupsPage = () => {
  return (
    <div>
      <GroupsDataGrid />
      <Link to="/admin/create/group">
        <Button variant="outlined" sx={{ width: "100%" }}>
          +
        </Button>
      </Link>
    </div>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/groups")({
  component: GroupsPage,
});
