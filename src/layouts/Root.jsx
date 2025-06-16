import { Outlet, useLocation } from "react-router";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar/Navbar";
import Music from "../components/Music";

const Root = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col antialiased">
      <header>
        <Navbar />
      </header>

      <main className={isHome ? "" : "pt-20"}>
        <Outlet />
      </main>

      <footer className="">
        <Footer />
      </footer>

      {/* Fixed Elements */}
      <Music />
    </div>
  );
};

export default Root;
