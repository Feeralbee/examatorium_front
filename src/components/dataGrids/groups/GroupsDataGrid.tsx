import { DataGrid } from "@mui/x-data-grid";
import groupsGridColumns from "./groupsGridColumns";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@misc/queryKeys";
import { GroupsService } from "@client";
import { useNavigate } from "@tanstack/react-router";

export default function GroupsDataGrid() {
  const query = useQuery({
    queryKey: queryKeys.allGroups,
    queryFn: () => GroupsService.allGroupsGroupsAllGet(),
    initialData: [],
  });
  const navigate = useNavigate();
  return (
    <DataGrid
      sx={{ "--DataGrid-overlayHeight": "300px" }}
      columns={groupsGridColumns}
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
          to: "/admin/info/group",
          search: params.row,
        });
      }}
    />
  );
}
