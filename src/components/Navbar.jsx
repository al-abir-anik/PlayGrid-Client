import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import AuthContext from "../auth/AuthContext";
import { useAppContext } from "../contexts/AppContext";
import Button from "./Button";
import Search from "./Search";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ setShowSideMenu }) => {
  const { user } = useContext(AuthContext);
  const { cartItems } = useAppContext();
  const location = useLocation();
  const isHome = location.pathname === "/";

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
      className={`w-full h-16 lg:h-20 fixed top-0  transition-all duration-300 z-[101] ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        isHome && !isScrolled
          ? "bg-transparent"
          : "bg-black500 backdrop-blur-lg shadow"
      }`}
    >
      <nav className="w-5/6 h-full mx-auto flex items-center justify-between text-sm font-medium text-white50">
        <div className="hidden lg:flex items-center gap-18">
          <Link to={"/"} className="w-32">
            <img src="/img/logo.png" alt="logo" />
          </Link>
          <span className="flex items-center gap-10 uppercase">
            <NavLink to={"/"} className="nav-hover-btn">
              Home
            </NavLink>
            <NavLink to={"store"} className="nav-hover-btn">
              Store
            </NavLink>
            <NavLink to={"all-games"} className="nav-hover-btn">
              All Games
            </NavLink>
            {/* <NavLink to={"news"} className="nav-hover-btn">News</NavLink> */}
            {user && (
              <NavLink to={"library/my-games"} className="nav-hover-btn">
                Library
              </NavLink>
            )}
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-10 uppercase">
          {/* search */}
          <Search isHome={isHome} isScrolled={isScrolled} />
          <NavLink to={"/wishlist"} className="nav-hover-btn">
            Wishlist
          </NavLink>
          <div className="flex items-center gap-1.5">
            <NavLink to={"/cart"} className="nav-hover-btn">
              Cart
            </NavLink>
            <span className="h-fit px-1 text-xs text-black700 bg-primary rounded font-semibold">
              {cartItems.length}
            </span>
          </div>

          {user ? (
            <button
              onClick={() => setShowSideMenu(true)}
              className="w-10 h-10 text-lg text-black500 hover:text-white50 bg-primary hover:bg-black200 rounded-full transition-colors uppercase cursor-pointer"
            >
              {user?.displayName?.charAt(0)}
            </button>
          ) : (
            <Link to={"register"}>
              <Button
                id="login"
                title="Login"
                containerClass="bg-yellow300 text-black500 px-10 !py-3"
              />
            </Link>
          )}
        </div>

        {/*------------ Navbar for small screen ---------- */}
        <div className="w-full flex lg:hidden items-center justify-between">
          <Link to={"/"} className="w-32">
            <img src="/img/logo.png" alt="logo" />
          </Link>

          {user ? (
            <button
              onClick={() => setShowSideMenu(true)}
              className="w-9 h-9 text-black500 hover:text-white50 bg-primary hover:bg-black200 rounded-full transition-colors uppercase cursor-pointer"
            >
              {user?.displayName?.charAt(0)}
            </button>
          ) : (
            <button onClick={() => setShowSideMenu(true)}>
              <IoMenu className="text-3xl" />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
