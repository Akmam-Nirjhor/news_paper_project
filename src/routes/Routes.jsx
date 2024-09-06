import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
// import LeftSideDetails from "../Pages/LeftSideDetails/LeftSideDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Details1 from "../Pages/Details/Details1";
import Details2 from "../Pages/Details/Details2";
import PrivateRoute from "./PrivateRoute";
import NewsCatagory1 from "../Pages/NewsCatagory1/NewsCatagory1";
import News2 from "../Pages/News2/News2";
import News3 from "../Pages/News3/News3";
import News4 from "../Pages/News4/News4";
import News5 from "../Pages/News5/News5";
// import News6 from "../Pages/News6/News6";
import News7 from "../Pages/News7/News7";
import News6 from "../Pages/News6/News6";
import Newpic3 from "../Pages/Newpic3/Newpic3";
import Picnew from "../Pages/Picnew2/Picnew";
import PICNEW4 from "../Pages/PICNEW4/PICNEW4";
import PIC5 from "../Pages/PIC5/PIC5";
import Putin from "../Pages/PUTIN/Putin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/category/0", // Dynamic segment in the path
        element: <NewsCatagory1></NewsCatagory1>, // The component to render
      },
      {
        path: `/category/1`,
        element: <News2></News2>,
      },
      {
        path: "/category/3",
        element: <News3></News3>,
      },
      {
        path: "/category/4",
        element: <News4></News4>,
      },
      {
        path: "/category/5",
        element: <News5></News5>,
      },
      {
        path: "/category/6",
        element: <News6></News6>,
      },
      {
        path: "/category/7",
        element: <News7></News7>,
      },
      {
        path: "/category1/3",
        element: <Picnew></Picnew>,
      },
      {
        path: "/category1/1",
        element: <Newpic3></Newpic3>,
      },
      {
        path: "/category1/1020",
        element: <Putin></Putin>,
      },
      {
        path: "/category1/4",
        element: <PICNEW4></PICNEW4>,
        // element: <Picnew></Picnew>,
      },
      {
        path: "/category1/5",
        element: <PIC5></PIC5>,
      },

      // {
      //   path: `/category/:categoryId`,
      //   element: (
      //     <PrivateRoute>
      //       <LeftSideDetails />
      //     </PrivateRoute>
      // //   ),
      //   loader: () => fetch("/categories.json"), // Define loader as a function
      //   //
      // },
      // // {
      // //   path: `/category1/:categoryId`,
      // //   element: (
      // //     <PrivateRoute>
      // //       <LeftSideDetails />
      // //     </PrivateRoute>
      // //   ),
      //   loader: () => fetch("/public/news.json"), // Define loader as a function
      // },

      {
        path: "/Details1",
        element: (
          <PrivateRoute>
            {" "}
            <Details1></Details1>
          </PrivateRoute>
        ),
      },
      {
        path: "/new",
        element: (
          <PrivateRoute>
            {" "}
            <Details2></Details2>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
