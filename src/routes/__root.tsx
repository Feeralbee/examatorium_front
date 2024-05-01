import Menu from "@components/menu";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import "@styles/root_route.scss";
import { useQueryClient } from "@tanstack/react-query";
import { authQueryKey } from "@constants/queryKeys";
import Auth from "@components/Auth";


const RootPage = () => {
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData(authQueryKey);
  if (!userData){
    return <Auth />
  }
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
