import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import Appoinment from "../pages/Appoinment/Appoinment/Appoinment";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";

import PrivateRouter from "./privateRoute/PrivateRouter";
import DashboardLyout from "../Main/DashboardLyout/DashboardLyout";
import MyAppointment from "../pages/Dashboard/Dashboard/MyAppointment/MyAppointment";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home> 
        },
        {
          path: "/appointment",
          element: <Appoinment></Appoinment>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }



      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRouter><DashboardLyout></DashboardLyout></PrivateRouter>,
      children:[
        {
            path: "/dashboard",
            element: <MyAppointment></MyAppointment>
        }
      ]
    }

  ]);

export default router;