import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Singnup from "../pages/Signup";
import Gardeners from "../components/Gardeners";
import Tipinput from "../pages/TipInput";

const router = createBrowserRouter([

  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {path:'/login',Component:Login},
      {path:'/signup',Component:Singnup},
      {path:'/gardeners',Component:Gardeners},
      {path:'/tip',Component:Tipinput},
     
   

    ]
  },


]);
export default router