import { GridColDef } from "@mui/x-data-grid";

const themesGridColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "Имя",
  },
  {
    field: "discipline",
    headerName: "Дисциплина",
    valueGetter: (value, row) =>
      `${row.discipline.index} ${row.discipline.name}`,
  },
];

export default themesGridColumns;
