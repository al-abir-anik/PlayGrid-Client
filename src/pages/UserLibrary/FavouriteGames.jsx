import { useOutletContext } from "react-router";
import LibraryCard from "../../components/Cards/LibraryCard";

const FavouriteGames = () => {
  const { userGames, handleFavourite } = useOutletContext();

  return (
    <div>
      {userGames.favouriteGames?.map((g) => (
        <LibraryCard key={g._id} game={g} />
      ))}
    </div>
  );
};

export default FavouriteGames;
