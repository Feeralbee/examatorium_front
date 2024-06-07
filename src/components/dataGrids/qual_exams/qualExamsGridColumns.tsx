import { QualificationExamDomainEntity } from "@client";
import { GridColDef } from "@mui/x-data-grid";

const qualExamsGridColumns: GridColDef[] = [
  {
    field: "semester",
    headerName: "семестр",
  },
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
  {
    field: "members",
    headerName: "Члены комиссии",
    valueGetter: (value, row: QualificationExamDomainEntity) => {
      return row.members
        .reduce<string>((accum, current) => {
          return (
            accum +
            `${current.surname} ${current.name} ${current.patronymic ?? ""}\n`
          );
        }, "")
        .slice(0, -1);
    },
    renderCell: (params) => {
      const members: [] = params.value.split("\n");
      return members.map((data, index) => <div key={index}>{data}</div>);
    },
  },
];

export default qualExamsGridColumns;
