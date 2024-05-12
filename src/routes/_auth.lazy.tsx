import Menu from "@components/Menu";
import UserDataStore from "@misc/stores/UserDataStore";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ruRU } from "@mui/x-data-grid/locales";
import {
  Outlet,
  createLazyFileRoute,
  useNavigate,
} from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/_auth")({
  component: () => {
    const navigate = useNavigate();
    useEffect(() => {
      if (!UserDataStore.state) {
        navigate({ to: "/login" });
      }
    }, [UserDataStore.state]);
    const theme = createTheme({}, ruRU);
    return (
      <>
        <Menu />
        <div id="app-container">
          <ThemeProvider theme={theme}>
            <Outlet />
          </ThemeProvider>
        </div>
      </>
    );
  },
});
