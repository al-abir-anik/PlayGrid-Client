import { useContext, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import "../Sidemenu/sidemenu.css";
import Logout from "./Logout/Logout";
import AuthContext from "../../../auth/AuthContext/AuthContext";

const Sidemenu = ({ handleSignOut }) => {
  const { user } = useContext(AuthContext);
  const [visibleRight, setVisibleRight] = useState(false);
  return (
    <>
      <Sidebar
        pt={{
          root: { className: "custom-sidebar" },
          header: { className: "custom-sidebar-header" },
          content: { className: "custom-sidebar-content" },
          closeButton: { className: "custom-close-button" },
        }}
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
        header={
          <p to={"/"} className="text-3xl logo-font text-black">
            PLAY<span className="text-primary">GRID</span>
          </p>
        }
      >
        <ul className="custom-menu">
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
        <div className="mt-auto space-y-3">
          <hr className="border text-black/10" />
          <Logout handleSignOut={handleSignOut}></Logout>
        </div>
      </Sidebar>

      <button
        onClick={() => setVisibleRight(true)}
        className="w-10 h-10 rounded-full hover:outline-4 outline-primary/30 transition-all duration-200 cursor-pointer overflow-hidden"
      >
        <img src={user?.photoURL} />
      </button>
    </>
  );
};

export default Sidemenu;
