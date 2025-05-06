import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div class="fixed h-full w-full bg-white">
        <div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <header className="z-10">
        <Navbar />
      </header>

      <main className="z-10">
        <Outlet />
      </main>

      <footer className="z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
