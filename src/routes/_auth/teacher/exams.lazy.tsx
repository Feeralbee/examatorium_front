import TeacherExamsDataGrid from "@components/dataGrids/teacher_exams";
import { createLazyFileRoute } from "@tanstack/react-router";

const ExamsPage = () => {
  return (
    <>
      <TeacherExamsDataGrid />
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/teacher/exams")({
  component: ExamsPage,
});
