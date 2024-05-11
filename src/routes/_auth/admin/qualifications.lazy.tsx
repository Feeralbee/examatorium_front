import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/admin/qualifications')({
  component: () => <div>Hello /_auth/admin/qualifications!</div>
})