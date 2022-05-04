import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm({ addToDo,setOpenModal }) {

const [newTodoValue, setNewTodoValue] = React.useState('');



const{ addTodo,  } = React.useContext(TodoContext)

    const onCancel = ()=> {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        
            addTodo(newTodoValue); 
            setOpenModal(false);
          
    };

    const onChange = (event) =>{
setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit} >
        <label>Create a new To Do</label>
        <textarea
          value = {newTodoValue}
          onChange = {onChange}
          placeholder = "Insert your new ToDo"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button-cancel"
            onClick = {onCancel}
          >
            Cancel
          </button>
  
          <button
            className="TodoForm-button TodoForm-button-add"
            type= "submit"
          >
            Create
            </button>
        </div>
      </form>
    )
}

export  {TodoForm}
