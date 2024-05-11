import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/student/exams')({
  component: () => <div>Hello /_auth/student/exams!</div>
})