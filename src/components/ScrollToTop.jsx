import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`w-10 h-10 p-1  bg-blue200/30 hover:bg-blue200/80 backdrop-blur-lg shadow rounded-sm transition-all duration-200 ease-in-out 
       ${
         isVisible
           ? "translate-x-0 opacity-100"
           : "translate-x-28 opacity-0"
       }`}
    >
      <button
        onClick={scrollToTop}
        className="w-full h-full rounded-xs text-white border border-blue50 hover:border-blue50/30 transition-all duration-200 cursor-pointer"
      >
        <IoIosArrowUp className="mx-auto text-white" />
      </button>
    </div>
  );
};

export default ScrollToTop;
