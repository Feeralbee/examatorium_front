/// <reference types="vite-plugin-svgr/client" />
import { RouterProvider, createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "@styles/index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

const queryClient = new QueryClient;

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactNotifications />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
