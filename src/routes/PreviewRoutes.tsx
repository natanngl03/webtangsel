import { lazy } from "react";
import { type RouteObject } from "react-router";

const Home = lazy(() => import("../pages/Home"));

export const PreviewRoutes: RouteObject[] = [
   {
      path: "/preview",
      Component: Home,
   },
];
