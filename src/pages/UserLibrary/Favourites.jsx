import { useOutletContext } from "react-router";
import LibraryCard from "../../components/Cards/LibraryCard";

const Favourites = () => {
  const { userGames, handleFavourite, favLoading } = useOutletContext();

  return (
    <div className="flex flex-wrap gap-10 w-full">
      {userGames.favouriteGames && userGames.favouriteGames.length > 0 ? (
        userGames.favouriteGames.map((g) => (
          <LibraryCard
            key={g._id}
            game={g}
            handleFavourite={handleFavourite}
            favourites={userGames.favouriteGames}
            favLoading={favLoading}
          />
        ))
      ) : (
        <p className="w-full min-h-[30vh] flex items-center justify-center text-offWhite50 text-lg font-medium">
          No favourites yet
        </p>
      )}
    </div>
  );
};

export default Favourites;
