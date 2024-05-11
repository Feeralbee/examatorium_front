import Menu from "@components/Menu";
import UserDataStore from "@misc/stores/UserDataStore";
import {
  Outlet,
  createLazyFileRoute,
  useNavigate,
} from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth")({
  component: () => {
    const navigate = useNavigate();
    if (!UserDataStore.state) {
      navigate({ to: "/login" });
    }
    return (
      <>
        <Menu />
        <div id="app-container">
          <Outlet />
        </div>
      </>
    );
  },
});
