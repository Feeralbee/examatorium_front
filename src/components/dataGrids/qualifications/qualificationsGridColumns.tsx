import { QualificationDomainEntity } from "@client";
import { GridColDef } from "@mui/x-data-grid";

const qualificationsGridColumns: GridColDef[] = [
  {
    field: "index",
    headerName: "Индекс",
  },
  {
    field: "name",
    headerName: "Имя",
  },
  {
    field: "competencies",
    headerName: "Компетенции",
    valueGetter: (value, row: QualificationDomainEntity) => {
      return row.competencies
        .reduce<string>((accum, current) => {
          return accum + `${current.index} ${current.name}\n`;
        }, "")
        .slice(0, -1);
    },
    renderCell: (params) => {
      const competencies: [] = params.value.split("\n");
      return competencies.map((data, index) => <div key={index}>{data}</div>);
    },
  },
];

export default qualificationsGridColumns;
