import React from "react";
import { AppUI } from "./AppUI";
//import './App.css';

const defaultItem = [
  { text: "sing", completed: false },
  { text: "sang", completed: false },
  { text: "song", completed: true },
];

function useLocalStorage(itemName, initialValue) {
  const[error, setError] = React.useState(false);
  const[loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

React.useEffect(()=> {
  setTimeout(()=> {

    try{

      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
    
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify([]));
        parsedItem = []; 
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
    setItem(parsedItem)
      setLoading(false);

    } catch(error){
      setError(error);
    }

    
  }, 1000);
});

  
  

  const saveItem = (newItem) => {
try{
  const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);

}catch(error){
setError(error);
}

    
  };

  return {item, saveItem, loading, error};
}

function App() {


  const {
    item: todos,
    saveItem: saveTodos,
    loading, 
    error
  } = useLocalStorage("TODOS_V1", [defaultItem]);
  const [search, setSearch] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {
    const todoIndex = todos.find((todo) => todo.text === text);
    todoIndex.completed=!todoIndex.completed;
    const newTodo = [...todos];
    saveTodos(newTodo);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.find((todo) => todo.text === text);
    const newTodo = [...todos];
    newTodo.splice(todoIndex, 1);
    saveTodos(newTodo);
  };


  return (
    <AppUI
    
      loading={loading}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodo={deleteTodo}
    />
  );
}

export default App; 
