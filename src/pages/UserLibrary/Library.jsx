import AuthContext from "../../auth/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Outlet } from "react-router";

const Library = () => {
  const { user } = useContext(AuthContext);
  const [userGames, setUserGames] = useState([]);
  const [favLoading, setFavLoading] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/user-gamelist?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserGames(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user.email]);

  const handleFavourite = async (id) => {
    setFavLoading((prev) => ({ ...prev, [id]: true }));

    const res = await axios.patch(`http://localhost:5000/user-favourites`, {
      email: user?.email,
      gameId: id,
    });

    if (res.data.modifiedCount > 0) {
      const updated = await fetch(
        `http://localhost:5000/user-gamelist?email=${user?.email}`
      );
      const newData = await updated.json();
      setUserGames(newData);
      setFavLoading((prev) => ({ ...prev, [id]: false }));
    } else {
      console.error("Favourite toggle failed");
    }
  };

  return (
    <div className="w-[70%] min-h-screen mx-auto py-12">
      <div className="w-full flex gap-14 text-lg">
        <NavLink
          to={"all"}
          className={({ isActive }) =>
            isActive ? "text-yellow300 font-semibold" : "text-offWhite50"
          }
        >
          All
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
