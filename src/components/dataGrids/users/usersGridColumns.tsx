import { UserDomainEntity } from "@client";
import userRolesLocalies from "@constants/userRolesLocalies";
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
    valueGetter: (value, row: UserDomainEntity) => userRolesLocalies[row.role],
  },
  {
    field: "login",
    headerName: "Логин",
  },
];

export default usersGridColumns;
