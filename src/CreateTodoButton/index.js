import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert('nueva tarea');
    };


    return (
        <button 
            className="CreateTodoButton"
            onClick={()=>onClickButton('mi mensaje')}
            >
            New task
                
        </button>
    )
}

export  {CreateTodoButton}
