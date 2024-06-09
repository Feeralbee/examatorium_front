import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/teacher/")({
  component: () => (
    <div style={{ fontSize: "2em", textAlign: "center", marginTop: 40 }}>
      C возвращением! Выберете необходимый раздел в меню слева.
    </div>
  ),
});
