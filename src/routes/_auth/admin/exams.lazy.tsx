import { Link, createLazyFileRoute } from "@tanstack/react-router";
import ExamsDataGrid from "@components/dataGrids/exams";
import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@misc/queryKeys";
import { ExamsService } from "@client";

const ExamsPage = () => {
  const query = useQuery({
    queryKey: queryKeys.allExams,
    queryFn: () => ExamsService.allExamsAllGet(),
    initialData: [],
  });
  return (
    <div>
      <ExamsDataGrid />
      <Link to="/admin/create/exam">
        <Button variant="outlined" sx={{ width: "100%" }}>
          +
        </Button>
      </Link>
    </div>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/exams")({
  component: ExamsPage,
});
