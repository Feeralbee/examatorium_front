import { createLazyFileRoute } from "@tanstack/react-router";

const CreateExamPage = () => {
  return;
};

export const Route = createLazyFileRoute("/_auth/admin/create/exam")({
  component: CreateExamPage,
});
