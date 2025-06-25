import LibraryCard2 from "../../components/Cards/LibraryCard2";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../auth/AuthContext/AuthContext";
import axios from "axios";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user-wishlist?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setWishlist(data))
      .catch((error) => console.log(error.message));
  }, [user.email]);

  const handleRemoveWishlist = async (id) => {
    const res = await axios.patch(
      `http://localhost:5000/user-wishlist/remove`,
      {
        email: user?.email,
        gameId: id,
      }
    );

    if (res.data.modifiedCount > 0) {
      setWishlist((prevWishlist) =>
        prevWishlist.filter((game) => game._id !== id)
      );
    } else {
      console.error("Wishlist Game remove failed");
    }
  };

  return (
    <>
      {wishlist.length === 0 ? (
        <div className="mx-auto min-h-[300px] flex items-center justify-center">
          <p className="text-xl text-gray-500 font-semibold">No games found</p>
        </div>
      ) : (
        <div className="w-full space-y-10">
          {wishlist?.map((g) => (
            <LibraryCard2
              key={g._id}
              game={g}
              handleRemoveWishlist={handleRemoveWishlist}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Wishlist;
