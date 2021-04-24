import React from "react";
import Todo from "./Todo";

var TodoList = (properties) => {

    React.useEffect(()=>{
        console.log(properties.todos);
        console.log(properties.filter);
    },[properties.todos, properties.filter]);

    let h5 = properties.filter==="all"?"entire":"filtered";

    return (
        <div className="container mt-3">
            <h5>here comes the {h5} list</h5>
            {
                properties.filteredTodos.map(todo=><Todo key={todo.id} data={todo} todos={properties.todos} setTodos={properties.setTodos}/>)
            }
        </div>
    );
};

export default TodoList;