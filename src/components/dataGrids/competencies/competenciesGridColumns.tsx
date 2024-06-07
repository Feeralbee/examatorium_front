import { CompetenceDomainEntity } from "@client";
import competenceTypesLocalies from "@constants/competenceTypesLocalies";
import { GridColDef } from "@mui/x-data-grid";

const competenciesGridColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "Имя",
  },
  {
    field: "type",
    headerName: "Тип",
    valueGetter: (value, row: CompetenceDomainEntity) =>
      competenceTypesLocalies[row.type],
  },
  {
    field: "index",
    headerName: "Индекс",
  },
];

export default competenciesGridColumns;
