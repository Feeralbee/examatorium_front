import { QueryKey } from "@tanstack/react-query";

const queryKeys: { [key: string]: QueryKey } = {
  auth: ["auth"],
  allUsers: ["all_users"],
  allExams: ["all_exams"],
  allQualExams: ["all_qual_exams"],
  allCompetencies: ["all_competencies"],
  allQualifications: ["all_qualifications"],
  allGroups: ["all_groups"],
  allDisciplines: ["all_disciplines"],
  allThemes: ["all_themes"],
};

export default queryKeys;
