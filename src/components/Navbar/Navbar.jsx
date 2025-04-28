import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../../auth/AuthContext/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => navigate("/login"))
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <nav className="w-full h-28 bg-[#202020] text-white flex items-center justify-around">
      <Link to={"/"} className="text-4xl font-black">
        PLAY<span className="text-[#45F882]">GRID</span>
      </Link>
      <div className="flex items-center gap-10">
        <ul className="flex gap-5 [&>li>a]:font-semibold [&>li>a]:transition [&>li>a]:duration-300 [&>li>a]:ease-in-out [&>li>a]:hover:text-[#45F882]">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/store"}>Store</NavLink>
          </li>
          <li>
            <NavLink to={"#"}>Library</NavLink>
          </li>
          <li>
            <NavLink to={"#"}>E-Sports</NavLink>
          </li>
        </ul>
        
        {user ? (
          <button onClick={handleSignOut} className="text-xs font-semibold space-x-2 border border-[#45F882] rounded-full py-2 px-4 transition duration-300 ease-in-out hover:text-[#45F882] cursor-pointer">
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
