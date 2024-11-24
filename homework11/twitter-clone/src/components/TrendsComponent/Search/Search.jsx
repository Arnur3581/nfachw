import React from "react";

const Search = ({ onSearch }) => {
  const handleChange = (event) => {
    const { value } = event.target;

    onSearch(value);
  };

  return (
    <div className="search d-flex align-items-center gap-1 rounded-pill p-3">
      <span class="material-symbols-outlined">search</span>
      <input className="input" placeholder="Search" onChange={handleChange} />
    </div>
  );
};

export default Search;
