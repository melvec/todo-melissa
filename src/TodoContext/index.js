import React from 'react';
import {useLocalStorage} from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item: todos,
        saveItem: saveTodos,
        loading, 
        error
      } = useLocalStorage("TODOS_V1", []);
      const [search, setSearch] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false);

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
      const addTodo = (text) => {
 
  
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
        
       
        
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.find((todo) => todo.text === text);
        const newTodo = [...todos];
        newTodo.splice(todoIndex, 1);
        saveTodos(newTodo);
      };

    return (
<TodoContext.Provider value={{

loading,
totalTodos,
completedTodos,
search,
setSearch,
searchedTodos,
completeTodos,
addTodo,
deleteTodo,
openModal,
setOpenModal

}}>
{props.children}

</TodoContext.Provider>

    )
}


export {TodoContext, TodoProvider}