import { createLazyFileRoute } from "@tanstack/react-router";

const CreateGroupPage = () => {
  return;
};

export const Route = createLazyFileRoute("/_auth/admin/create/group")({
  component: CreateGroupPage,
});
