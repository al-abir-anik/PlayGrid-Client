import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Music from "../components/Music";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col antialiased">
      <Navbar />
      <main className={isHome ? "" : "mt-20"}>
        <Outlet />
      </main>
      <Footer />

      {/* Fixed Elements */}
      <div className="w-auto fixed right-4 bottom-4 z-[100] space-y-3">
        <ScrollToTop />
        <Music />
      </div>
    </div>
  );
};

export default RootLayout;
