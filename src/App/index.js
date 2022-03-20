import React from "react";
import { AppUI } from "./AppUI";
//import './App.css';

const defaultItem = [
  { text: "sing", completed: false },
  { text: "sang", completed: true },
  { text: "song", completed: true },
];

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify([]));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", [defaultItem]);
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

  const completeTodo = (text) => {
    const todoIndex = todos.find((todo) => todo.text === text);
    const newTodo = [...todos];
    newTodo[todoIndex].completed = true;
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
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
