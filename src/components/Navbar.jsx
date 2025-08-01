import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import AuthContext from "../auth/AuthContext";
import { useAppContext } from "../contexts/AppContext";
import Sidemenu from "./Navbar/Sidemenu/Sidemenu";
import Button from "./Button";
import { MdOutlineShoppingBag } from "react-icons/md";
import Search from "./Search";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const { cartItems } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleSignOut = () => {
    signOutUser()
      .then(() => navigate("/login"))
      .catch((error) => console.log("ERROR", error.message));
  };

  // hide on scroll navbar
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // scrolling down
      setShowNavbar(false);
    } else {
      // scrolling up
      setShowNavbar(true);
    }

    // Transparent background logic
    setIsScrolled(currentScrollY > 50);
    setLastScrollY(currentScrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-20 fixed top-0  transition-all duration-300 z-[101] ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        isHome && !isScrolled
          ? "bg-transparent"
          : "bg-black500 backdrop-blur-lg shadow"
      }`}
    >
      <nav className="w-5/6 h-full mx-auto text-white50 flex items-center justify-between">
        <Link to={"/"} className="text-4xl logo-font text-white5050">
          PLAY<span className="text-blue300">GRID</span>
        </Link>
        <div className="text-lg font-zentry tracking-wider flex items-center gap-10 uppercase">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"store"}>Store</NavLink>
          <NavLink to={"all-games"}>All Games</NavLink>
          {/* <NavLink to={"news"}>News</NavLink> */}
          {user && <NavLink to={"library/all"}>Library</NavLink>}
        </div>

        <div className="flex items-center gap-10 text-lg font-zentry uppercase">
          {/* search */}
          <Search />

          {/* wishlist link */}
          <NavLink
            to={"/wishlist"}
            className="flex items-center cursor-pointer"
          >
            {/* <MdOutlineShoppingBag className="text-3xl" /> */}
            Wishlist
          </NavLink>

          {/* Cart link */}
          <NavLink to={"/cart"} className="flex items-center cursor-pointer">
            {/* <MdOutlineShoppingBag className="text-3xl" /> */}
            Cart
            <span className="px-1 ml-1 text-center text-xs text-black500 bg-yellow300 rounded font-barlow font-semibold">
              {cartItems.length}
            </span>
          </NavLink>

          {user ? (
            <Sidemenu handleSignOut={handleSignOut}></Sidemenu>
          ) : (
            <Link to={"login"}>
              <Button
                id="login"
                title="Login"
                containerClass="bg-yellow300 text-black500 px-10 !py-3"
              />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
