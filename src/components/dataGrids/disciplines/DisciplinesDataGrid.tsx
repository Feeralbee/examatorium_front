import { DataGrid } from "@mui/x-data-grid";
import disciplinesGridColumns from "./disciplinesGridColumns";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@misc/queryKeys";
import { DisciplinesService } from "@client";
import { useNavigate } from "@tanstack/react-router";

export default function DisciplinesDataGrid() {
  const query = useQuery({
    queryKey: queryKeys.allDisciplines,
    queryFn: () => DisciplinesService.allDisciplinesAllGet(),
    initialData: [],
  });
  const navigate = useNavigate();
  return (
    <DataGrid
      sx={{ "--DataGrid-overlayHeight": "300px" }}
      columns={disciplinesGridColumns}
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
          to: "/admin/info/discipline",
          search: params.row,
        });
      }}
    />
  );
}
