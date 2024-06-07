import { createLazyFileRoute } from "@tanstack/react-router";

const CreateUserPage = () => {
  return;
};

export const Route = createLazyFileRoute("/_auth/admin/create/user")({
  component: CreateUserPage,
});
