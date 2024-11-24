import { useState } from "react";
import "./App.css";
import Home from "./components/HomeComponent";
import SideMenu from "./components/SideMenuComponent";
import Trends from "./components/TrendsComponent/Trends";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (searchText) => {
    setSearch(searchText);
  };

  return (
    <div className="App d-flex flex-row">
      <SideMenu />
      <div className="vertical-divider"></div>
      <Home search={search} />
      <div className="vertical-divider"></div>
      <Trends onSearch={handleSearch} />
    </div>
  );
}

export default App;
