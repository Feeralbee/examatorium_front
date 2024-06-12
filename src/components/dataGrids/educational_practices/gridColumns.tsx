import { GridColDef } from "@mui/x-data-grid";

const gridColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "Название",
  },
  {
    field: "teacher",
    headerName: "Преподаватель",
    valueGetter: (value, row) =>
      `${row.teacher.surname} ${row.teacher.name} ${row.teacher.patronymic ?? ""}`,
  },
  {
    field: "group",
    headerName: "Группа",
    valueGetter: (value, row) => row.group.name,
  },
  {
    field: "hours_count",
    headerName: "Количество часов",
  },
];

export default gridColumns;
