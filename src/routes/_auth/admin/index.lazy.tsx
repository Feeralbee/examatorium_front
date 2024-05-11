import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/admin/')({
  component: () => <div>Hello /_auth/admin/!</div>
})