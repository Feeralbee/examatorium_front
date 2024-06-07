import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/admin/info/qual_exam")({
  component: () => <div>Hello /_auth/admin/info/qual_exam!</div>,
});
