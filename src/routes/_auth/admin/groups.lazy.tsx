import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/admin/groups')({
  component: () => <div>Hello /_auth/admin/groups!</div>
})