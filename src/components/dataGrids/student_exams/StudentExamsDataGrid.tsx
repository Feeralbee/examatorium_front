import { DataGrid } from "@mui/x-data-grid";
import examsGridColumns from "./examsGridColumns";
import { useQuery } from "@tanstack/react-query";
import { ExamsService } from "@client";
import { useNavigate } from "@tanstack/react-router";
import UserDataStore from "@misc/stores/UserDataStore";

export default function StudentExamsDataGrid() {
  const studentExamsQuery = useQuery({
    queryKey: ["student_exams"],
    queryFn: () =>
      ExamsService.studentExamsExamsStudentGet({
        studentId: `${UserDataStore.state?.id}`,
      }),
    initialData: [],
  });
  const navigate = useNavigate();
  return (
    <DataGrid
      sx={{ "--DataGrid-overlayHeight": "300px" }}
      columns={examsGridColumns}
      rows={studentExamsQuery.data}
      loading={studentExamsQuery.isFetching || studentExamsQuery.isLoading}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 20,
          },
        },
      }}
      autosizeOnMount
      autosizeOptions={{
        includeHeaders: true,
        includeOutliers: true,
        expand: true,
        outliersFactor: 1,
      }}
      pageSizeOptions={[10, 20, 40]}
      disableRowSelectionOnClick
      autoHeight
      onRowClick={(params) => {
        navigate({
          to: "/student/questions",
          search: { exam_id: params.row.id },
        });
      }}
    />
  );
}
