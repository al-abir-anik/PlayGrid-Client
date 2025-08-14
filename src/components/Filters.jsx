import { IoIosArrowForward } from "react-icons/io";

const Filters = ({ title, isOpen, toggleOpen, children }) => {
  return (
    <div className="text-offWhite50 hover:text-white">
      <button
        onClick={toggleOpen}
        className="w-full py-3 text-left border-b border-black200 flex items-center justify-between cursor-pointer"
      >
        <p
          className={`font-medium  ${
            isOpen && "text-white50"
          }`}
        >
          {title}
        </p>
        <IoIosArrowForward
          className={`w-5 h-5 transition-transform duration-200  ${
            isOpen ? "rotate-90 text-white50" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Filters;
