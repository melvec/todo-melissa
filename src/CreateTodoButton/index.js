import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };


    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
            >
            New task
                
        </button>
    )
}

export  {CreateTodoButton}
