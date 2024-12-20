import { AppName } from "./Components/AppName";
import { AddTodo } from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  // handle add Event
  const handleAdd = (inputTodo,inputDate) => {
    if(inputDate.length!=0 && inputTodo.length!=0){
      const newTodos=[...todos,{name:inputTodo,date:inputDate}]
      setTodos(newTodos);
    }else{
      alert("Enter Todo Please")
    }  
  };

  //handle delete event
  const handleDelete=(todoItem)=>{
    const newTodos=todos.filter(item=> item.name!=todoItem);
    setTodos(newTodos);
  }
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo handleAdd={handleAdd}></AddTodo>
      {todos.length==0 && <h1>No work for today Enjoy</h1>}
      <TodoItems todos={todos} handleDelete={handleDelete}></TodoItems>
    </center>
  );
}

export default App;
