import React from "react";
import Search from "./Search/Search";

const Trends = ({ onSearch }) => {
  return (
    <div className="p-3">
      <Search onSearch={onSearch} />
    </div>
  );
};

export default Trends;
