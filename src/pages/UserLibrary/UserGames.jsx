import { useOutletContext } from "react-router";
import LibraryCard from "../../components/Cards/LibraryCard";

const UserGames = () => {
  const { userGames, handleFavourite, favLoading } = useOutletContext();

  return (
    <div className="flex flex-wrap gap-10 w-full">
      {userGames.ownedGames && userGames.ownedGames.length > 0 ? (
        userGames.ownedGames.map((g) => (
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
          No games available
        </p>
      )}
    </div>
  );
};

export default UserGames;
