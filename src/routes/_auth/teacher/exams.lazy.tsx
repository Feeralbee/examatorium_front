import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/teacher/exams")({
  component: () => <div>Hello /_auth/teacher/exams!</div>,
});
