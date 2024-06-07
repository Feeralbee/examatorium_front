import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/admin/info/discipline")({
  component: () => <div>Hello /_auth/admin/info/disciplines!</div>,
});
