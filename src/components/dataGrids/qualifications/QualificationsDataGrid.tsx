import { DataGrid } from "@mui/x-data-grid";
import qualificationsGridColumns from "./qualificationsGridColumns";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@misc/queryKeys";
import { QualificationsService } from "@client";
import { useNavigate } from "@tanstack/react-router";

export default function QualificationsDataGrid() {
  const query = useQuery({
    queryKey: queryKeys.allQualifications,
    queryFn: () => QualificationsService.allQualificationsAllGet(),
    initialData: [],
  });
  const navigate = useNavigate();
  return (
    <DataGrid
      sx={{
        "--DataGrid-overlayHeight": "300px",
        [`& .MuiDataGrid-cell`]: {
          p: 2,
        },
      }}
      columns={qualificationsGridColumns}
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
      getRowHeight={() => "auto"}
      getEstimatedRowHeight={() => 200}
      onRowClick={(params) => {
        navigate({
          to: "/admin/info/qualification",
          search: params.row,
        });
      }}
    />
  );
}
