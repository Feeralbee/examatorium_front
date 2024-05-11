import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/student/')({
  component: () => <div>Hello /_auth/student/!</div>
})