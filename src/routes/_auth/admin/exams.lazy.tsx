import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/admin/exams')({
  component: () => <div>Hello /_auth/admin/exams!</div>
})