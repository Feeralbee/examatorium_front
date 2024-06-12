import { GridColDef } from "@mui/x-data-grid";

const gridColumns: GridColDef[] = [
  {
    field: "discipline",
    headerName: "Дисциплина",
    valueGetter: (value, row) =>
      `${row.discipline.index} ${row.discipline.name}`,
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
];

export default gridColumns;
