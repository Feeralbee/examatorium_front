import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/student/title_pages")({
  component: () => <div>Hello /_auth/student/title_pages!</div>,
});
