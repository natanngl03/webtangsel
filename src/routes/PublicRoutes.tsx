import { lazy } from "react";
import { type RouteObject } from "react-router-dom";
import App from "../App";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

const PublicRoutes: RouteObject[] = [
   {
      path: "/",
      Component: App,
      children: [
         {
            index: true,
            Component: Home,
         },
         {
            path: "not-found",
            Component: NotFound,
         },
      ],
   },
];

export default PublicRoutes;
