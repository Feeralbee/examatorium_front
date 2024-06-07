import { DataGrid } from "@mui/x-data-grid";
import themesGridColumns from "./themesGridColumns";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@misc/queryKeys";
import { ThemesService } from "@client";
import { useNavigate } from "@tanstack/react-router";

export default function ThemesDataGrid() {
  const query = useQuery({
    queryKey: queryKeys.allThemes,
    queryFn: () => ThemesService.allThemesAllGet(),
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
          to: "/admin/info/theme",
          search: params.row,
        });
      }}
    />
  );
}
