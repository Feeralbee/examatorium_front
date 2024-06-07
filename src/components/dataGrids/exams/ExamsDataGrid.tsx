import { DataGrid } from "@mui/x-data-grid";
import examsGridColumns from "./examsGridColumns";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@misc/queryKeys";
import { ExamsService } from "@client";
import { useNavigate } from "@tanstack/react-router";

export default function ExamsDataGrid() {
  const query = useQuery({
    queryKey: queryKeys.allExams,
    queryFn: () => ExamsService.allExamsAllGet(),
    initialData: [],
  });
  const navigate = useNavigate();
  return (
    <DataGrid
      sx={{ "--DataGrid-overlayHeight": "300px" }}
      columns={examsGridColumns}
      rows={query.data}
      loading={query.isFetching}
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
          to: "/admin/info/exam",
          search: params.row,
        });
      }}
    />
  );
}
