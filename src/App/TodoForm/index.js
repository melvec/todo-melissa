import React from 'react'
import { TodoContext } from '../../TodoContext';

function TodoForm() {

const [newTodoValue, setNewTodoValue] = React.useState('');

const{
    addTodo,

}= React.useContext(TodoContext)

    const onCancel = ()=> {
        //TODO
    };

    const onSubmit = (event) => {
        event.preventDefault();
addTodo(newTodoValue);
    };

    const onChange = (event) =>{
setNewTodoValue(event.target.value);
    };

    return (
      <form onSubmit={onSubmit}>
          <label></label>
          <textarea 
            value = {newTodoValue}
            onChange = {onChange}
            placeholder="insert your TODO here"
          />
          <div>
              <button  type="button"onClick={onCancel}>Cancel</button>
              <button type="submit">Add</button>
              
              
          </div>
      </form>
    )
}

export  {TodoForm}
