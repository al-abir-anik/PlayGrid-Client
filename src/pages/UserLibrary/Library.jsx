import AuthContext from "../../auth/AuthContext/AuthContext";
import { useContext, useEffect, useState } from "react";
import LibraryCard from "../../components/Cards/LibraryCard";
import GameCard1 from "../../components/Cards/GameCard1";
import axios from "axios";
import { NavLink, Outlet } from "react-router";

const Library = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [userGames, setUserGames] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user-gamelist?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserGames(data))
      .catch((error) => console.log(error.message));
  }, [user.email]);

  const handleFavourite = async (id) => {
    axios
      .patch(`http://localhost:5000/user-gamelist`, {
        email: user?.email,
        favourites: id,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          console.log("Favourite updated!");
        }
      });
  };

  return (
    <div className="w-9/12 min-h-screen mx-auto py-12">
      <div className="w-full flex justify-between">
        <div className="space-x-10">
          <NavLink
            to={"all"}
            className={({ isActive }) =>
              isActive ? "text-yellow300 font-semibold" : "text-gray-500"
            }
          >
            All
          </NavLink>
          <NavLink
            to={"favourites"}
            className={({ isActive }) =>
              isActive ? "text-yellow300 font-semibold" : "text-gray-500"
            }
          >
            Favourites
          </NavLink>
        </div>
        <NavLink
          to={"wishlist"}
          className={({ isActive }) =>
            isActive ? "text-yellow300 font-semibold" : "text-gray-500"
          }
        >
          Wishlist
        </NavLink>
      </div>

      <div className="my-12 flex justify-start gap-12">
        <Outlet context={{ userGames, handleFavourite }} />
      </div>
    </div>
  );
};

export default Library;
