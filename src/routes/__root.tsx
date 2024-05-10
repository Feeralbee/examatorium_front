import Menu from "@components/Menu";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import "@styles/root_route.scss";
import { AuthMiddleware } from "@middlewares";

const RootPage = () => {
  return (
    <AuthMiddleware>
        <Menu />
        <div id="app-container">
          <Outlet />
        </div>
    </AuthMiddleware>
  );
};

export const Route = createRootRoute({
  component: RootPage,
});
