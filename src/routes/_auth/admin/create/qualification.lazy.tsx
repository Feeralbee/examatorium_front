import { createLazyFileRoute } from "@tanstack/react-router";

const CreateQualificationPage = () => {
  return;
};

export const Route = createLazyFileRoute("/_auth/admin/create/qualification")({
  component: CreateQualificationPage,
});
