import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/admin/disciplines")({
  component: () => <div>Hello /_auth/admin/disciplines!</div>,
});
