import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Store from "../pages/Store/Store/Store";
import Login from "./../pages/Register/Login";
import Signup from "../pages/Register/Signup";
import GameDetails from "../pages/GameDetails/GameDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "/store",
        element: <Store></Store>,
      },
      {
        path: "/game/:id",
        element: <GameDetails></GameDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/game/${params.id}`),
      },
    ],
  },
]);

export default Routes;
