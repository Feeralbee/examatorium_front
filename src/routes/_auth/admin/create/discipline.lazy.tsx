import { createLazyFileRoute } from "@tanstack/react-router";

const CreateDisciplinePage = () => {
  return;
};

export const Route = createLazyFileRoute("/_auth/admin/create/discipline")({
  component: CreateDisciplinePage,
});
