import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {

   const {search, setSearch} = React.useContext(TodoContext);

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
