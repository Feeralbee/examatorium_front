import { GridColDef } from "@mui/x-data-grid";

const disciplinesGridColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "Имя",
  },
  {
    field: "index",
    headerName: "Индекс",
  },
];

export default disciplinesGridColumns;
