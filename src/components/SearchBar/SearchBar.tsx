import Search from "../../resources/icons/Search";
import photoJSON from "../../JSON/__photoJSON"
import "./SearchBar.css";

import { useState } from "react";
import JSON from "../../JSON/__photoJSON";

const SearchBar = () => {
  const [things, setThings] = useState("");

  // console.log(JSON);
  console.log(JSON.filter((i)=> {
    return i.name === "BHM 365 Days"
  }));
  return (
    <div className="SearchBarContainer">
      <input
        type="search"
        id="SearchBar"
        placeholder="Search..."
        onChange={(e) => {
          setThings(e.target.value);
        }}
      />
<div>
  {/* {JSON.map((i)=> {
    return(
      <p>{i}</p>
    )
  })} */}
</div>
      <Search className="SearchIcon" />
    </div>
  );
};

export default SearchBar;
