import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/admin/info/competence")({
  component: () => <div>Hello /_auth/admin/info/competencies!</div>,
});
