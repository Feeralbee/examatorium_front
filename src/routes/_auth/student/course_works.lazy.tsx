import { CourseWorksService, OpenAPI } from "@client";
import UserDataStore from "@misc/stores/UserDataStore";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/student/course_works")({
  component: () => {
    const worksQuery = useQuery({
      queryKey: ["student_course_works"],
      queryFn: () =>
        CourseWorksService.studentCourseWorksCourseWorksStudentGet({
          studentId: UserDataStore.state?.id,
        }),
      initialData: [],
    });
    return (
      <>
        <h1>Курсовые работы</h1>
        {worksQuery.data.map((value) => (
          <>
            <a
              href={`${OpenAPI.BASE}/course_works/pages?student_id=${UserDataStore.state?.id}&course_work_id=${value.id}`}
              key={value.id}
            >{`${value.discipline?.index} ${value.discipline?.name}`}</a>
            <br />
          </>
        ))}
      </>
    );
  },
});
