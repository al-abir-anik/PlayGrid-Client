import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);

  // ..............CARTLIST...............
  // load user cartlist with game details
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:5000/user-cartlist?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user]);

  // Add to Cart Function
  const [cartBtnLoading, setCartBtnLoading] = useState({});
  const handleAddToCart = async (id) => {
    setCartBtnLoading((prev) => ({ ...prev, [id]: true }));
    try {
      if (!user) {
        toast.error("Login required!");
        return;
      }

      const res = await axios.post(`http://localhost:5000/add-to-cart`, {
        email: user?.email,
        gameId: id,
      });

      if (res.data.modifiedCount > 0 || res.data.insertedId) {
        const updated = await fetch(
          `http://localhost:5000/user-cartlist?email=${user?.email}`
        );
        const newData = await updated.json();
        setCartItems(newData);
        toast.success("Item Added to cart");
      } else {
        toast.error("Add to cart Failed!");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error("Add to cart error:", error);
    } finally {
      setCartBtnLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  // Remove item from cartlist
  const [rmvBtnLoading, setRmvBtnLoading] = useState({});
  const removeCartItem = async (id) => {
    setRmvBtnLoading((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await axios.patch(`http://localhost:5000/delete-cartItem`, {
        email: user?.email,
        cartItem: id,
      });

      if (res.data.modifiedCount > 0) {
        setCartItems((prev) => prev.filter((item) => item._id !== id));
        toast.success("Removed from cart!");
      } else {
        console.error("product delete from cart failed");
        toast.error("Item remove Failed!");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error("Item remove error:", error);
    } finally {
      setRmvBtnLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  // ............WISHLIST.............
  // load user wishlist with game details
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:5000/user-wishlist?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWishlist(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user]);

  // Add to wishlist Function
  const [wishBtnLoading, setWishBtnLoading] = useState({});
  const handleAddToWishlist = async (id) => {
    setWishBtnLoading((prev) => ({ ...prev, [id]: true }));
    try {
      if (!user) {
        toast.error("Login required!");
        return;
      }

      const res = await axios.post(`http://localhost:5000/add-to-wishlist`, {
        email: user?.email,
        gameId: id,
      });

      if (res.data.modifiedCount > 0 || res.data.insertedId) {
        const updated = await fetch(
          `http://localhost:5000/user-wishlist?email=${user?.email}`
        );
        const newData = await updated.json();
        setWishlist(newData);
        toast.success("Added to Wishlist.");
      } else {
        toast.error("Add to wishlist Failed!");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error("Add to wishlist error:", error);
    } finally {
      setWishBtnLoading(false);
    }
  };

  // Remove item from wishlist
  const removeWishlistItem = async (id) => {
    setRmvBtnLoading((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await axios.patch(`http://localhost:5000/delete-wishItem`, {
        email: user?.email,
        wishItem: id,
      });

      if (res.data.modifiedCount > 0) {
        setWishlist((prev) => prev.filter((item) => item._id !== id));
        toast.success("Item Removed from wishlist!");
      } else {
        console.error("Item remove Failed");
        toast.error("Item remove Failed!");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error("Item remove error:", error);
    } finally {
      setRmvBtnLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  // move a game to wishlist from cart
  const moveToWishlist = async (id) => {
    setWishBtnLoading((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await axios.patch(`http://localhost:5000/move-to-wishlist`, {
        email: user?.email,
        gameId: id,
      });

      if (res.data.modifiedCount > 0 || res.data.insertedId) {
        setCartItems((prev) => prev.filter((item) => item._id !== id));
        toast.success("Moved to Wishlist.");

        const updated = await fetch(
          `http://localhost:5000/user-wishlist?email=${user?.email}`
        );
        const newData = await updated.json();
        setWishlist(newData);
      } else {
        toast.error("Move Failed!");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error("Move to wishlist error:", error);
    } finally {
      setWishBtnLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  const appInfo = {
    fetchLoading,
    setFetchLoading,

    search,
    setSearch,

    showCheckout,
    setShowCheckout,

    cartItems,
    setCartItems,
    handleAddToCart,
    cartBtnLoading,
    setCartBtnLoading,
    removeCartItem,
    rmvBtnLoading,
    setRmvBtnLoading,

    moveToWishlist,

    wishlist,
    setWishlist,
    handleAddToWishlist,
    wishBtnLoading,
    setWishBtnLoading,
    removeWishlistItem,
  };

  return (
    <AppContext.Provider value={appInfo}>
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        children
      )}
    </AppContext.Provider>
  );
};

// a Hook for easy import of App Context
export const useAppContext = () => {
  return useContext(AppContext);
};
