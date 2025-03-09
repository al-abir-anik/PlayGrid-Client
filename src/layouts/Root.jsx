import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="">
        <Outlet/>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;
