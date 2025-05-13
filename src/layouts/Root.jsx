import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen antialiased">
      <header className="">
        <Navbar />
      </header>

      <main className={isHome ? "" : "pt-20"}>
        <Outlet />
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
