import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Singnup from "../pages/Signup";


import PrivateRoute from "../components/PrivateRoute";
import ExploreGardeners from "../pages/ExploreGardeners";
import BrowseTips from "../pages/BrowseTips";
import TipDetails from "../pages/TipDetails";
import Mytips from "../pages/Mytips";
import UpdateMytip from "../pages/UpdateMytip";
import Errorpage from "../pages/Errorpage";
import Tipinput from "../pages/Tipinput";
import Dashbord from "../pages/Dashbord";
import Dashbordcards from "../pages/Dashbord/Dashbordcards";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/signup", Component: Singnup },
      // { path: "/gardeners", Component: Gardeners },
      { path: "/allgardeners", Component: ExploreGardeners },
      { path: "/alltips", Component: BrowseTips },
      {
        path: "/updatemytip/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_baseurl}/tipdetails/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateMytip></UpdateMytip>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytips",
        element: (
          <PrivateRoute>
            <Mytips></Mytips>
          </PrivateRoute>
        ),
      },
      {
        path: "/tipdetails/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_baseurl}/tipdetails/${params.id}`),
        element: (
          <PrivateRoute>
            <TipDetails></TipDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/tip",
        element: (
          <PrivateRoute>
            <Tipinput></Tipinput>
          </PrivateRoute>
        ),
      },

      {
        path: "/*",
        Component: Errorpage,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Dashbord></Dashbord>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        Component: Dashbordcards,
      },
    ],
  },
]);
export default router;
