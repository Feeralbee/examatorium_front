import { createLazyFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

export const Route = createLazyFileRoute("/_auth/teacher/tickets")({
  component: () => {
    const form = useForm<{}>();
  },
});
