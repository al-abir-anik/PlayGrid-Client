import { IoIosArrowForward } from "react-icons/io";

const Filter = ({ title, isOpen, toggleOpen, children }) => {
  return (
    <div>
      <button
        onClick={toggleOpen}
        className="w-full py-3 text-left border-b border-gray-400/40 flex items-center justify-between focus:outline-none"
      >
        <p className="text-xl">{title}</p>
        <IoIosArrowForward
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Filter;
