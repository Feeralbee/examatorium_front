import { DataGrid } from "@mui/x-data-grid";
import usersGridColumns from "./usersGridColumns";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@misc/queryKeys";
import { UsersService } from "@client";
import { useNavigate } from "@tanstack/react-router";

export default function UsersDataGrid() {
  const query = useQuery({
    queryKey: queryKeys.allUsers,
    queryFn: () => UsersService.getAllUsersUsersAllGet(),
    initialData: [],
  });
  const navigate = useNavigate();
  return (
    <DataGrid
      sx={{ "--DataGrid-overlayHeight": "300px" }}
      columns={usersGridColumns}
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
      autoHeight
      pageSizeOptions={[10, 20, 40]}
      disableRowSelectionOnClick
      onRowClick={(params) => {
        navigate({
          to: "/admin/info/user",
          search: { ...params.row, password: undefined },
        });
      }}
    />
  );
}
