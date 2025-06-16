import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import AuthContext from "../../../auth/AuthContext/AuthContext";
import Sidemenu from "../Sidemenu/Sidemenu";

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
  
  return (
    <div
      className={`w-full h-24 fixed top-0  transition-all duration-300 z-[101] ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        isHome && !isScrolled
          ? "bg-transparent"
          : "bg-black/40 backdrop-blur-lg shadow"
      }`}
    >
      <nav className="w-11/12 h-full mx-auto text-white flex items-center justify-between ">
        <Link to={"/"} className="text-4xl logo-font ">
          PLAY<span className="text-violet300">GRID</span>
        </Link>
        <div className="text-blue100 flex items-center gap-10">
          <ul className="flex gap-5 [&>li>a]:font-medium [&>li>a]:transition [&>li>a]:duration-300 [&>li>a]:ease-in-out [&>li>a]:hover:text-primary">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"store"}>Store</NavLink>
            </li>
            <li>
              <NavLink to={"library"}>Library</NavLink>
            </li>
            <li>
              <NavLink to={"news"}>News</NavLink>
            </li>
          </ul>

          {user ? (
            <Sidemenu handleSignOut={handleSignOut}></Sidemenu>
          ) : (
            <div className="inline-flex text-xs font-semibold space-x-2 border border-primary rounded-full">
              <Link
                to={"/login"}
                className="py-2 px-4 transition duration-300 ease-in-out hover:text-primary"
              >
                LOG IN
              </Link>
              <span className="w-0.5 bg-primary/70"></span>
              <Link
                to={"signup"}
                className="py-2 px-4 transition duration-300 ease-in-out hover:text-primary"
              >
                SIGN UP
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
