import { $OpenApiTs } from "@client";
import { UseQueryResult } from "@tanstack/react-query";
import { RoutePaths } from "@tanstack/react-router";
import { routeTree } from "src/routeTree.gen";

export type UserAuthData = $OpenApiTs["/users"]["get"]["req"];

export type UseAuthReturn = {
  login: (login: string, password: string) => void;
  logout: () => void;
  query: UseQueryResult;
};

export type RoutePath = RoutePaths<typeof routeTree>;
