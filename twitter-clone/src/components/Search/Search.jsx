import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <HiOutlineMagnifyingGlass />
      <input className="search__input" placeholder="Search" />
    </div>
  );
};

export { Search };
