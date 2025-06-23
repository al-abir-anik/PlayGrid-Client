import { useLoaderData, useOutletContext } from "react-router";
import LibraryCard from "../../components/Cards/LibraryCard";

const UserGames = () => {
//   const userOwnedGames = useLoaderData();
const { userGames, handleFavourite } = useOutletContext();
  

  return (
    <div>
      {userGames.purchasedGames?.map((g) => (
        <LibraryCard key={g._id} game={g} />
      ))}
    </div>
  );
};

export default UserGames;
