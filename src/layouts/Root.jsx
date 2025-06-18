import { Outlet, useLocation } from "react-router";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar/Navbar";
import Music from "../components/Music";
import ScrollToTop from "../components/ScrollToTop";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Root = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col antialiased">
      <header>
        <Navbar />
      </header>
      <main className={isHome ? "" : "pt-20"}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>

      {/* Fixed Elements */}
      <div className="w-auto fixed right-4 bottom-4 z-[100] space-y-3">
        <ScrollToTop />
        <Music />
      </div>
    </div>
  );
};

export default Root;
