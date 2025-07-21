import { useAppContext } from "../contexts/AppContext";
import WishCard from "../components/Cards/WishCard";

const Wishlist = () => {
  const { wishlist } = useAppContext();

  return (
    <div className="w-3/5 mx-auto py-14 flex flex-col text-white">
      {wishlist.length === 0 ? (
        <div className="mx-auto min-h-[300px] flex items-center justify-center">
          <p className="text-xl text-gray-500 font-semibold">No games found</p>
        </div>
      ) : (
        <div className="w-full space-y-10">
          {wishlist.map((game) => (
            <WishCard key={game._id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
