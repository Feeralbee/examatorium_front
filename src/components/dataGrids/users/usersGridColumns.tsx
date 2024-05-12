import { GridColDef } from "@mui/x-data-grid";

const usersGridColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "Имя",
  },
  {
    field: "surname",
    headerName: "Фамилия",
  },
  {
    field: "patronymic",
    headerName: "Отчество",
  },
  {
    field: "role",
    headerName: "Роль",
  },
  {
    field: "login",
    headerName: "Логин",
  },
];

export default usersGridColumns;
