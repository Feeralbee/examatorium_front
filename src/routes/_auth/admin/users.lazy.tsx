import { createLazyFileRoute } from "@tanstack/react-router";
import UsersDataGrid from "@components/dataGrids/users";

const UsersPage = () => {
  return (
    <div>
      <UsersDataGrid />
    </div>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/users")({
  component: UsersPage,
});
