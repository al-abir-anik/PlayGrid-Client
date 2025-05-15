import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import "../Sidemenu/sidemenu.css";
import Logout from "./Logout/Logout";

const Sidemenu = ({ handleSignOut }) => {
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
        className="open-sidebar-btn"
      >k
        <img src=""/>
      </button>
    </>
  );
};

export default Sidemenu;
