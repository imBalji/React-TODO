import React from "react";
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  let [inputText, setInputText] = React.useState("");
  let [todos, setTodos] = React.useState([]);
  let [filter, setFilter] = React.useState("all");
  let [filteredTodos, setFilteredTodos] = React.useState([]);

  let filterHandler = ()=>{
    switch(filter){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case "incomplete":
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
    };
  };

  let saveLocalTodos = ()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  let getLocalTodos = ()=>{
    if(localStorage.getItem("todos") === null)
      localStorage.setItem("todos", JSON.stringify([]));
    else
      setTodos(JSON.parse(localStorage.getItem("todos")));
  };

  // gets the local storage upon page refresh to retain data
  React.useEffect(()=>{
    getLocalTodos();
  }, []);

  React.useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  }, [todos, filter]);

  return (
    <div className="container">
      <div className="position-absolute top-0 start-50 translate-middle-x">
        
        <h3 className="text-center">Todo List</h3>
        
        <Form inputText={inputText} setInputText={setInputText}
              todos={todos} setTodos={setTodos}
              setFilter={setFilter}/>
        
        <TodoList todos={todos} setTodos={setTodos} filter={filter} filteredTodos={filteredTodos}/>
      </div>
    </div>
  );
}

export default App;