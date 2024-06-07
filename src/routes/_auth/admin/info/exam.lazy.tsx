import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/admin/info/exam")({
  component: () => <div>Hello /_auth/admin/info/exam!</div>,
});
