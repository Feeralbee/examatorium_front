import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/admin/themes')({
  component: () => <div>Hello /_auth/admin/themes!</div>
})