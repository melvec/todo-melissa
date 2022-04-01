import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
//import './App.css';

const defaultItem = [
  { text: "sing", completed: false },
  { text: "sang", completed: false },
  { text: "song", completed: true },
];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
