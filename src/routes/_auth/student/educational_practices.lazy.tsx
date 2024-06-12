import { EducationalPracticesService, OpenAPI } from "@client";
import UserDataStore from "@misc/stores/UserDataStore";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/_auth/student/educational_practices",
)({
  component: () => {
    const worksQuery = useQuery({
      queryKey: ["student_educational_practices"],
      queryFn: () =>
        EducationalPracticesService.studentEducationalPracticesEducationalPracticesStudentGet(
          {
            studentId: UserDataStore.state?.id,
          },
        ),
      initialData: [],
    });
    return (
      <>
        <h1>Учебные практики</h1>
        {worksQuery.data.map((value) => (
          <>
            <a
              href={`${OpenAPI.BASE}/educational_practices/pages?student_id=${UserDataStore.state?.id}&educational_practice_id=${value.id}`}
              key={value.id}
            >{`${value.name}`}</a>
            <br />
          </>
        ))}
      </>
    );
  },
});
