import { useEffect, useState } from "react";
import { CgArrowTopLeftO } from "react-icons/cg";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`w-fit h-fit p-1  bg-black200/30 hover:bg-black200/80 backdrop-blur-lg shadow rounded-sm transition-all duration-200 ease-in-out 
       ${
         isVisible
           ? "translate-x-0 opacity-100"
           : "translate-x-28 opacity-0"
       }`}
    >
      <button
        onClick={scrollToTop}
        className="px-3 py-2 flex items-center gap-2 rounded text-white border border-white50 hover:border-white50/30 transition-all duration-200 cursor-pointer"
      >
        <p>Back to Top</p>
        <CgArrowTopLeftO className="rotate-45 text-lg" />
      </button>
    </div>
  );
};

export default ScrollToTop;
