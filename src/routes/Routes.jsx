import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "./../pages/Register/Login";
import Signup from "../pages/Register/Signup";
import GameDetails from "../pages/GameDetails/GameDetails";
import GameStore from "../pages/GameStore/GameStore";
import NewsPage from "../pages/NewsPage/NewsPage";
import NewsDetails from "../pages/NewsPage/NewsDetails";
import UserLibrary from "../pages/Library/UserLibrary";
import PrivateRoute from "./PrivateRoute";

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
        element: <GameStore></GameStore>,
        loader: () =>
          Promise.all([
            fetch("http://localhost:5000/upcoming-games").then((res) =>
              res.json()
            ),
            fetch("http://localhost:5000/games-count").then((res) =>
              res.json()
            ),
          ]),
      },
      {
        path: "game/:id",
        element: <GameDetails></GameDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/game/${params.id}`),
      },
      {
        path: "news",
        element: <NewsPage></NewsPage>,
        loader: () =>
          Promise.all([
            fetch("http://localhost:5000/upcoming-news").then((res) =>
              res.json()
            ),
            fetch("http://localhost:5000/news-count").then((res) => res.json()),
          ]),
      },
      {
        path: "news/:id",
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "library",
        element: (
          <PrivateRoute>
            <UserLibrary></UserLibrary>
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UserLibrary></UserLibrary>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
