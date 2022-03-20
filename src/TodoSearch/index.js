import React from "react";
import "./TodoSearch.css";

function TodoSearch({search, setSearch}) {

   

  const onSearchValueChange = (event) => {
    console.log(event.target.value); 
    setSearch(event.target.value);
    
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Search ToDo"
      onChange={onSearchValueChange}
      value={search}
    />
   


  );
}

export { TodoSearch };
