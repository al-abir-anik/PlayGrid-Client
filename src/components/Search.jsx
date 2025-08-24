import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router";

const Search = ({ isHome, isScrolled }) => {
  const { search, setSearch } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (search.length > 0) {
      navigate("/all-games");
    }
  }, [search, navigate]);

  return (
    <div
      className={`px-4 pt-0.5 pb-0.5 lg:pb-1 text-base flex items-center gap-2 bg-offWhite50 rounded-full ${
        isHome && !isScrolled
          ? "lg:bg-transparent border border-white50"
          : "lg:bg-black200"
      }`}
    >
      <IoSearch className="text-base lg:text-xl text-black200 lg:text-white50" />
      <input
        onKeyUp={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search games"
        className="p-1.5 w-full outline-none text-sm lg:text-base placeholder:text-white50"
      />
    </div>
  );
};

export default Search;
