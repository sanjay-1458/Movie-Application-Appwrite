import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search"></img>
        <input
          type="text"
          placeholder="Search movies here!"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
        {}
      </div>
    </div>
  );
}

export default Search;
