import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [search, setSearch] = useState("");

  // load currentUser cart items with product details
  //   const [cartItems, setCartItems] = useState([]);
  //   useEffect(() => {
  //     fetch(`http://localhost:3000/user-cart-items?email=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCartItems(data);
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   }, [user]);

  const appInfo = {
    fetchLoading,
    setFetchLoading,
    search,
    setSearch,
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
