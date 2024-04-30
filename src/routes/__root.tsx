import Menu from "@components/menu";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import "@styles/root_route.scss";


const RootPage = () => {
  return(
    <>
      <Menu />
      <div id="app-container">
        <Outlet />
      </div>
    </>
  );
}

export const Route = createRootRoute({
  component: RootPage,
});
