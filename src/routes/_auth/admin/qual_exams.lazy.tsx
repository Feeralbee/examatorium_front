import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/admin/qual_exams')({
  component: () => <div>Hello /_auth/admin/qual_exams!</div>
})