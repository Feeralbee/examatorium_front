import { DataGrid } from "@mui/x-data-grid";
import gridColumns from "./gridColumns";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@misc/queryKeys";
import { CourseWorksService } from "@client";
import { useNavigate } from "@tanstack/react-router";

export default function CourseWorksDataGrid() {
  const query = useQuery({
    queryKey: queryKeys.allCourseWorks,
    queryFn: () => CourseWorksService.allCourseWorksAllGet(),
    initialData: [],
  });
  const navigate = useNavigate();
  return (
    <DataGrid
      sx={{ "--DataGrid-overlayHeight": "300px" }}
      columns={gridColumns}
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
          to: "/admin/info/course_work",
          search: params.row,
        });
      }}
    />
  );
}
