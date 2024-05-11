import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/teacher/')({
  component: () => <div>Hello /_auth/teacher/!</div>
})