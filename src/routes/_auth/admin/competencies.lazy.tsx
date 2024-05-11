import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/admin/competencies")({
  component: () => <div>Hello /_auth/admin/competencies!</div>,
});
