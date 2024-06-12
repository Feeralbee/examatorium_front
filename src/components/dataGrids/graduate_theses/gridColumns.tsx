import { GridColDef } from "@mui/x-data-grid";

const gridColumns: GridColDef[] = [
  {
    field: "group",
    headerName: "Группа",
    valueGetter: (value, row) => row.group.name,
  },
];

export default gridColumns;
