import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/admin/info/qualification")({
  component: () => <div>Hello /_auth/admin/info/qualification!</div>,
});
