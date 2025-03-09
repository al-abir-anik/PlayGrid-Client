import { NavLink } from "react-router";

const Navbar = () => {
  const user = true;

  return (
    <nav className="w-full h-28 text-white flex items-center justify-around fixed z-10">
      <NavLink to={"/"} className="text-4xl font-black">
        PLAY<span className="text-[#45F882]">GRID</span>
      </NavLink>
      <div className="flex items-center gap-10">
        <ul className="flex gap-5 [&>li>a]:font-semibold [&>li>a]:transition [&>li>a]:duration-300 [&>li>a]:ease-in-out [&>li>a]:hover:text-[#45F882]">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"#"}>Store</NavLink>
          </li>
          <li>
            <NavLink to={"#"}>Library</NavLink>
          </li>
          <li>
            <NavLink to={"#"}>E-Sports</NavLink>
          </li>
        </ul>
        {user && (
          <div className="inline-flex text-xs font-semibold space-x-2 border border-[#45F882] rounded-full">
            <NavLink
              to={"#"}
              className="py-2 px-4 transition duration-300 ease-in-out hover:text-[#45F882]">
              LOGIN
            </NavLink>
            <span className="w-0.5 bg-[#45F882]/70"></span>
            <NavLink
              to={"#"}
              className="py-2 px-4 transition duration-300 ease-in-out hover:text-[#45F882]">
              SIGN UP
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
