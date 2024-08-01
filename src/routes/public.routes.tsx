import { Construcao } from "@/pages/Construcao";
import { HomePage } from "@/pages/HomePage";

import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/construcao",
    element: <Construcao />,
  },
];

export default routes;
