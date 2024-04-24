import Menu from '@components/menu';
import { createRootRoute, Outlet } from '@tanstack/react-router';


export const Route = createRootRoute({
  component: () => (
    <>
      <Menu />
      <Outlet />
    </>
  ),
});
