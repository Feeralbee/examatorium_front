import { QueryKey } from "@tanstack/react-query";

const queryKeys: { [key: string]: QueryKey } = {
  auth: ["auth"],
  allUsers: ["all_users"],
  allExams: ["all_exams"],
  allCompetencies: ["all_competencies"],
  allQualifications: ["all_qualifications"],
  allGroups: ["all_groups"],
  allDisciplines: ["all_disciplines"],
  allThemes: ["all_themes"],
  studentGroup: ["student_group"],
  allCourseWorks: ["all_course_works"],
  allGraduateTheses: ["all_graduate_theses"],
  allEducationalPractices: ["all_educational_practices"],
};

export default queryKeys;
