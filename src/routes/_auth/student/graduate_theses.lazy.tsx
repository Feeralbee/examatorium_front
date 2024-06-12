import { GraduateThesesService, OpenAPI } from "@client";
import UserDataStore from "@misc/stores/UserDataStore";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/student/graduate_theses")({
  component: () => {
    const worksQuery = useQuery({
      queryKey: ["student_graduate_theses"],
      queryFn: () =>
        GraduateThesesService.studentGraduateThesesGraduateThesesStudentGet({
          studentId: UserDataStore.state?.id,
        }),
      initialData: [],
    });
    return (
      <>
        <h1>ВКР</h1>
        {worksQuery.data.map((value) => (
          <>
            <a
              href={`${OpenAPI.BASE}/graduate_theses/pages?student_id=${UserDataStore.state?.id}&graduate_thesis_id=${value.id}`}
              key={value.id}
            >
              Получить титульные листы
            </a>
            <br />
          </>
        ))}
      </>
    );
  },
});
