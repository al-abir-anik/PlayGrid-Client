import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { useAppContext } from "../contexts/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Music from "../components/Music";
import ScrollToTop from "../components/ScrollToTop";
import CheckOut from "../components/checkout/CheckOut";
import Sidemenu from "../components/Sidemenu";

const RootLayout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const { showCheckout, setShowCheckout } = useAppContext();
  const [showSideMenu, setShowSideMenu] = useState(false);

  // Default Route Change Scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Navbar setShowSideMenu={setShowSideMenu} />
      <main className={`flex-grow ${isHome ? "bg-white50" : "mt-20"}`}>
        <Outlet />
      </main>
      <Footer />

      {/* Fixed Elements */}
      <div className="w-auto fixed right-4 bottom-4 z-[100] space-y-3">
        {/* <ScrollToTop /> */}
        {/* <Music /> */}
      </div>

      {/* Checkout Modal */}
      {showCheckout && <CheckOut setShowCheckout={setShowCheckout} />}
      {showSideMenu && (
        <Sidemenu
          showSideMenu={showSideMenu}
          setShowSideMenu={setShowSideMenu}
        />
      )}
    </div>
  );
};

export default RootLayout;
