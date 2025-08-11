import { useOutletContext } from "react-router";
import LibraryCard from "../../components/Cards/LibraryCard";

const Favourites = () => {
  const { userGames, handleFavourite, favLoading } = useOutletContext();

  return (
    <div className="flex flex-wrap gap-10">
      {userGames.favouriteGames?.map((g) => (
        <LibraryCard
          key={g._id}
          game={g}
          handleFavourite={handleFavourite}
          favourites={userGames.favouriteGames}
          favLoading={favLoading}
        />
      ))}
    </div>
  );
};

export default Favourites;
