import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router";

const Search = () => {
  const { search, setSearch } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (search.length > 0) {
      navigate("/all-games");
    }
  }, [search, navigate]);

  return (
    <div className="px-4 hidden lg:flex items-center gap-2 border-2 border-white rounded-full">
      <LuSearch className="text-xl" />
      <input
        onKeyUp={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search games"
        className="p-1.5 w-full bg-transparent outline-none"
      />
    </div>
  );
};

export default Search;
