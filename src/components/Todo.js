import React from "react";

let Todo = (properties)=> {

    let deleteHandler = ()=>{
        properties.setTodos(properties.todos.filter(todo => todo.id !== properties.data.id));
    };

    let doneHandler = ()=>{
        properties.setTodos(properties.todos.map(todo=>{
            if(todo.id === properties.data.id)
                return {
                    ...todo, completed: !todo.completed
                }
            return todo;
        }));
    };

    let textData = properties.data.completed?<s>{properties.data.text}</s>:properties.data.text;
    let btnText = properties.data.completed?" nope":" done";

    return (
        <div>
            <ul>
                {
                    textData
                }
                <button className="btn" onClick={doneHandler}>
                    <i className="bi bi-check-circle-fill"></i> {btnText}
                </button>
                <button className="btn" onClick={deleteHandler}>
                    <i className="bi bi-trash-fill"></i> delete
                </button>
            </ul>
        </div>
    );
};

export default Todo;