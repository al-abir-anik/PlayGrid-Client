import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import GameDetails from "../pages/GameDetails/GameDetails";
import NewsPage from "../pages/NewsPage/NewsPage";
import NewsDetails from "../pages/NewsPage/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Library from "../pages/UserLibrary/Library";
import AllGames from "../pages/AllGames/AllGames";
import UserGames from "../pages/UserLibrary/UserGames";
import FavouriteGames from "../pages/UserLibrary/Favourites";
import GameStore from "../pages/GameStore/GameStore";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Register from "../pages/Register";
import LockRoute from "../routes/LockRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <GameStore />,
      },
      {
        path: "/all-games",
        element: <AllGames />,
      },
      {
        path: "/all-games/:genre",
        element: <AllGames />,
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
            <Library />
          </PrivateRoute>
        ),
        children: [
          {
            path: "all",
            element: <UserGames />,
          },
          {
            path: "favourites",
            element: <FavouriteGames />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "register",
        element: (
          <LockRoute>
            <Register />
          </LockRoute>
        ),
      },
    ],
  },
]);

export default Routes;
