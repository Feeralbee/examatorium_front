import StudentExamsDataGrid from "@components/dataGrids/student_exams";
import { createLazyFileRoute } from "@tanstack/react-router";

const ExamsPage = () => {
  return (
    <>
      <StudentExamsDataGrid />
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/student/exams")({
  component: ExamsPage,
});
