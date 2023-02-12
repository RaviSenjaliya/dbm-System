import Loadable from "app/components/Loadable";
import { lazy } from "react";

const BatchData = Loadable(lazy(() => import("../masters/Batch")));
const MasterRoutes = [
  {
    path: "/masters/Batch",
    element: <BatchData />,
  },
];
export default MasterRoutes;
