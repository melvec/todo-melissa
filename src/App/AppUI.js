import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import {TodoItem} from "../TodoItem";

import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "./TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <>
      <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
        <TodoCounter />

        <TodoSearch />

        <TodoList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Cargando...</p>}
          {!loading && !searchedTodos.length && <p>Crea tu primer Todo</p>}

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

            {!!openModal && (
              <Modal>
          <TodoForm />
        </Modal>
            )}
        
      </div>

      <div style={{ maxWidth: "10rem", margin: "4rem auto" }}>
        <CreateTodoButton  setOpenModal={setOpenModal}/>
      </div>
    </>
  );
}

export { AppUI };
