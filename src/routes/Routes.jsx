import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Details from "../components/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "gadgets/:product_id",
          element: <Details></Details>,
          loader: ()=> fetch('/Gadgets.json')
        },
        {
            path: "/statistics",
            element: <Statistics></Statistics>
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);


export default router;