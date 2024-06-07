import { DataGrid } from "@mui/x-data-grid";
import themesGridColumns from "./competenciesGridColumns";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@misc/queryKeys";
import { CompetenciesService } from "@client";
import { useNavigate } from "@tanstack/react-router";

export default function CompetenciesDataGrid() {
  const query = useQuery({
    queryKey: queryKeys.allCompetencies,
    queryFn: () => CompetenciesService.allCompetenciesAllGet(),
    initialData: [],
  });
  const navigate = useNavigate();
  return (
    <DataGrid
      sx={{ "--DataGrid-overlayHeight": "300px" }}
      columns={themesGridColumns}
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
          to: "/admin/info/competence",
          search: params.row,
        });
      }}
    />
  );
}
