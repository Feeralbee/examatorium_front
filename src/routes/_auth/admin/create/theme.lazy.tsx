import { createLazyFileRoute } from "@tanstack/react-router";

const CreateThemePage = () => {
  return;
};

export const Route = createLazyFileRoute("/_auth/admin/create/theme")({
  component: CreateThemePage,
});
