import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/admin/users")({
  component: () => <div>Hello /_auth/admin/users!</div>,
});
