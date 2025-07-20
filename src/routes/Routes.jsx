import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "./../pages/Register/Login";
import Signup from "../pages/Register/Signup";
import GameDetails from "../pages/GameDetails/GameDetails";
import NewsPage from "../pages/NewsPage/NewsPage";
import NewsDetails from "../pages/NewsPage/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Library from "../pages/UserLibrary/Library";
import UpdateProfile from "../pages/Profile/UpdateProfile";
import AllGames from "../pages/AllGames/AllGames";
import UserGames from "../pages/UserLibrary/UserGames";
import FavouriteGames from "../pages/UserLibrary/Favourites";
import Wishlist from "../pages/UserLibrary/Wishlist";
import GameStore from "../pages/GameStore/GameStore";
import Cart from "../pages/Cart";

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
        loader: () => fetch("http://localhost:5000/upcoming-games"),
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
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
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
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
