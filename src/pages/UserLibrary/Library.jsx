import AuthContext from "../../auth/AuthContext/AuthContext";
import { useContext, useEffect, useState } from "react";
import LibraryCard from "../../components/Cards/LibraryCard";

const Library = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("All Games");
  const [userGames, setUserGames] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user-gamelist?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserGames(data))
      .catch((error) => console.log(error.message));
  }, [user.email]);

  const tabs = ["All Games", "Favourites"];

  return (
    <div className="w-9/12 min-h-screen mx-auto py-12">
      <div className="w-full flex justify-between">
        <div className="space-x-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 ${
                activeTab === tab ? "text-yellow300" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          onClick={() => setActiveTab("Wishlist")}
          className={`px-4 py-3 ${
            activeTab === "Wishlist" ? "text-yellow300" : ""
          }`}
        >
          Wishlist
        </button>
      </div>

      <div className="my-12 flex justify-start gap-12">
        {activeTab === "All Games" &&
          userGames.purchasedGames?.map((g) => (
            <LibraryCard key={g._id} game={g} />
          ))}

        {activeTab === "Favourites" &&
          userGames.favouriteGames?.map((g) => (
            <LibraryCard key={g._id} game={g} />
          ))}

        {activeTab === "Wishlist" &&
          userGames.wishlistGames?.map((g) => (
            <LibraryCard key={g._id} game={g} />
          ))}
      </div>
    </div>
  );
};

export default Library;
