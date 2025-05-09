import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import AuthContext from "../../auth/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
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

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
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

  // Dynamic navbar background color
  const bgStyle =
    isHome && !isScrolled
      ? "bg-transparent"
      : "bg-black/30 backdrop-blur-lg shadow";

  return (
    <nav
      className={`w-full h-20 text-white flex items-center justify-around fixed top-0  transition-all duration-300 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${bgStyle}`}>
      <Link to={"/"} className="text-4xl logo-font ">
        PLAY<span className="text-[#45F882]">GRID</span>
      </Link>
      <div className="flex items-center gap-10">
        <ul className="flex gap-5 [&>li>a]:font-semibold [&>li>a]:transition [&>li>a]:duration-300 [&>li>a]:ease-in-out [&>li>a]:hover:text-[#45F882]">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"store"}>Store</NavLink>
          </li>
          <li>
            <NavLink to={"#"}>Library</NavLink>
          </li>
          <li>
            <NavLink to={"news"}>News</NavLink>
          </li>
          <li>
            <NavLink to={"#"}>E-Sports</NavLink>
          </li>
        </ul>

        {user ? (
          <button
            onClick={handleSignOut}
            className="text-xs font-semibold space-x-2 border border-[#45F882] rounded-full py-2 px-4 transition duration-300 ease-in-out hover:text-[#45F882] cursor-pointer">
            LOG OUT
          </button>
        ) : (
          <div className="inline-flex text-xs font-semibold space-x-2 border border-[#45F882] rounded-full">
            <Link
              to={"/login"}
              className="py-2 px-4 transition duration-300 ease-in-out hover:text-[#45F882]">
              LOG IN
            </Link>
            <span className="w-0.5 bg-[#45F882]/70"></span>
            <Link
              to={"signup"}
              className="py-2 px-4 transition duration-300 ease-in-out hover:text-[#45F882]">
              SIGN UP
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
