import { Follow } from "../Follow/Follow";
import { Recomendations } from "../Recomendations/Recomendations";
import { Search } from "../Search/Search";
import "./Trends.css";

const Trends = () => {
  return (
    <aside className="trends">
      <div className="trends__container">
        <Search />
        <Recomendations />
        <Follow />
      </div>
    </aside>
  );
};

export { Trends };
