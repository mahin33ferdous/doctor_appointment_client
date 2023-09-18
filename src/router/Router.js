import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import Appoinment from "../pages/Appoinment/Appoinment/Appoinment";



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
          path: "/appoinment",
          element: <Appoinment></Appoinment>
      }

      ]
    },
  ]);

export default router;