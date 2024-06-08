import { ThemeDomainEntity } from "@client";
import { GridColDef } from "@mui/x-data-grid";

const themesGridColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "Имя",
  },
  {
    field: "exam",
    headerName: "Экзамен",
    valueGetter: (value, row: ThemeDomainEntity) =>
      `${row.exam.discipline.index} ${row.exam.discipline.name}, ${row.exam.group.name}, ${row.exam.teacher.surname}, ${row.exam.semester} семместр`,
  },
];

export default themesGridColumns;
