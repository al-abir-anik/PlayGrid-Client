import AuthContext from "../../auth/AuthContext";
import { useContext, useState } from "react";
import axios from "axios";
import { NavLink, Outlet } from "react-router";
import { useAppContext } from "../../contexts/AppContext";
import toast from "react-hot-toast";

const Library = () => {
  const { user } = useContext(AuthContext);
  const { userGames, setUserGames } = useAppContext();
  const [favLoading, setFavLoading] = useState({});

  const handleFavourite = async (id) => {
    setFavLoading((prev) => ({ ...prev, [id]: true }));

    const res = await axios.patch(`https://playgrid-server.vercel.app/user-favourites`, {
      email: user?.email,
      gameId: id,
    });

    if (res.data.modifiedCount > 0) {
      const updated = await fetch(
        `https://playgrid-server.vercel.app/user-gamelist?email=${user?.email}`
      );
      const newData = await updated.json();
      setUserGames(newData);
      toast.success("Favourites list updated.");
      setFavLoading((prev) => ({ ...prev, [id]: false }));
    } else {
      console.error("Favourite toggle failed");
    }
  };

  return (
    <div className="w-[70%] mx-auto py-12">
      <div className="w-full flex gap-14 text-lg font-general">
        <NavLink
          to={"my-games"}
          className={({ isActive }) =>
            isActive ? "text-yellow300 font-semibold" : "text-offWhite50"
          }
        >
          My Games
        </NavLink>
        <NavLink
          to={"favourites"}
          className={({ isActive }) =>
            isActive ? "text-yellow300 font-semibold" : "text-offWhite50"
          }
        >
          Favourites
        </NavLink>
      </div>

      <div className="my-12 flex justify-start gap-12">
        <Outlet context={{ userGames, handleFavourite, favLoading }} />
      </div>
    </div>
  );
};

export default Library;
