import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import TodoItem from "../TodoItem";

function AppUI({
  totalTodos,
  completedTodos,
  search,
  setSearch,
  searchedTodos,
  completeTodos,
  deleteTodo,
}) {
  return (
    <>
      <div style={{ maxWidth: "30rem" }}>
        <TodoSearch />
        <CreateTodoButton />
      </div>

      <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
        <TodoCounter total={totalTodos} completed={completedTodos} />

        <TodoSearch search={search} setSearch={setSearch} />

        <TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </div>
    </>
  );
}

export { AppUI };
