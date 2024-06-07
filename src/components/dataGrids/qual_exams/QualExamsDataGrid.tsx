import { DataGrid } from "@mui/x-data-grid";
import qualExamsGridColumns from "./qualExamsGridColumns";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@misc/queryKeys";
import { QualExamsService } from "@client";
import { useNavigate } from "@tanstack/react-router";

export default function QualExamsDataGrid() {
  const query = useQuery({
    queryKey: queryKeys.allQualExams,
    queryFn: () => QualExamsService.allQualExamsAllGet(),
    initialData: [],
  });
  const navigate = useNavigate();
  return (
    <DataGrid
      sx={{ "--DataGrid-overlayHeight": "300px" }}
      columns={qualExamsGridColumns}
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
          to: "/admin/info/qual_exam",
          search: params.row,
        });
      }}
    />
  );
}
