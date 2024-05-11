import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/admin/")({
  component: () => (
    <div style={{ fontSize: "2em", textAlign: "center" }}>
      C возвращением! Выберете необходимый раздел в меню слева.
    </div>
  ),
});
