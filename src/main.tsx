/// <reference types="vite-plugin-svgr/client" />
import { RoutePaths, RouterProvider, createRouter } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "@styles/index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

const queryClient = new QueryClient;

const router = createRouter({ routeTree, context: {queryClient} });


declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <ReactNotifications />
      <RouterProvider router={router} />
    </QueryClientProvider>
);
