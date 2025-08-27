import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import AuthContext from "../auth/AuthContext";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
import Search from "./Search";

const Sidemenu = ({ setShowSideMenu }) => {
  const navigate = useNavigate();
  const { user, signOutUser } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowSideMenu(false);
    }, 300);
  };
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate("/");
        toast.success("Logout Successful");
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-[9999] bg-black700/40 transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-3/5 sm:w-2/4 md:w-2/5 lg:w-3/10 xl:w-3/12 2xl:w-2/11 h-screen px-4 py-8 ml-auto flex flex-col gap-6 lg:gap-12 bg-white50 transform transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full px-4 flex justify-between items-center">
          <img
            src="/public/img/logoDark.png"
            alt="logo"
            className="w-18 lg:w-28 h-fit"
          />
          <button onClick={handleClose}>
            <RxCross2 className="text-lg lg:text-2xl cursor-pointer" />
          </button>
        </div>

        <div className="block lg:hidden">
          <Search />
        </div>

        {/* <div className="text-black200 hidden lg:block">
          <Link className="sidemenu-link hidden lg:block">
            <FiUser className="text-lg" /> My Profile
          </Link>
          <Link className="sidemenu-link hidden lg:block">
            <FiUser className="text-lg" /> Dashboard
          </Link>
        </div> */}

        <div className="text-black200 block lg:hidden">
          <NavLink
            to={"/"}
            onClick={() => setShowSideMenu(false)}
            className="sidemenu-link"
          >
            Home
          </NavLink>
          <NavLink
            to={"/store"}
            onClick={() => setShowSideMenu(false)}
            className="sidemenu-link"
          >
            Store
          </NavLink>
          <NavLink
            to={"/all-games"}
            onClick={() => setShowSideMenu(false)}
            className="sidemenu-link"
          >
            All Games
          </NavLink>
          {user && (
            <NavLink
              to={"/library"}
              onClick={() => setShowSideMenu(false)}
              className="sidemenu-link"
            >
              My Library
            </NavLink>
          )}
          {!user && (
            <NavLink to={"register"} className="sidemenu-link">
              Login
            </NavLink>
          )}
        </div>

        {/* Contact us */}
        <div className="px-4 space-y-4 hidden lg:block">
          <p className="font-medium text-black200">CONTACT US</p>
          <ul className="pl-5 space-y-2 text-black200 list-disc list-outside">
            <li>+9 333 222 5557</li>
            <li>info@playgrid.com</li>
            <li>New Central Park W7 Street, New York</li>
          </ul>
        </div>

        {/* subscribe */}
        <div className="px-4 space-y-4 hidden lg:block">
          <p className="font-medium text-primary">SUBSCRIBE</p>
          <form className="w-full flex items-center gap-3 border border-offWhite50 rounded">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2.5 text-black500 placeholder-black100 bg-transparent rounded-2xl outline-none overflow-hidden"
              required
            />
            <button className="px-2 cursor-pointer">
              <IoSend className="text-xl text-primary" />
            </button>
          </form>
          <p className="text-black200">
            Subscribe to our newsletter to recieved the fastest mail from us.
          </p>
        </div>

        {/*       logout       */}
        {user && (
          <div className="w-full mt-auto space-y-3 relative">
            <hr className="border text-red-700/10" />
            <button
              onClick={() => setShowLogoutModal(true)}
              className="w-full py-3 font-medium text-red-600 hover:bg-red-400/10 rounded cursor-pointer"
            >
              Log Out
            </button>
            {/* logout modal */}
            {showLogoutModal && (
              <div
                onMouseLeave={() => setShowLogoutModal(false)}
                className="py-6 px-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow absolute -top-30"
              >
                <span className="mx-auto p-3 bg-red-50 rounded-full">
                  <LuLogOut className="text-xl text-red-400" />
                </span>
                <p className="text-black100 my-3 text-center">
                  Do you really want to logout?
                </p>

                <div className="flex items-center justify-center gap-4 mt-3 w-full">
                  <button
                    onClick={() => setShowLogoutModal(false)}
                    className="w-full md:w-28 h-10 rounded-md text-black100 font-medium text-sm hover:bg-gray-100 active:scale-95 transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="w-full md:w-28 h-10 rounded-lg text-white bg-red-500 font-medium text-sm hover:bg-red-700 active:scale-95 transition cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidemenu;
