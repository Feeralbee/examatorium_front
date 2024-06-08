import { GridColDef } from "@mui/x-data-grid";

const groupsGridColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "Имя",
  },
  {
    field: "qualification",
    headerName: "Квалификация",
    valueGetter: (value, row) =>
      `${row.qualification?.index} ${row.qualification?.name}`,
  },
];

export default groupsGridColumns;
