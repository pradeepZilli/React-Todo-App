import { AppName } from "./Components/AppName";
import { AddTodo } from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import { TodoItemContext } from "./Store/todo-items-store";
import { Message } from "./Components/Message";
function App() {
  const [todos, setTodos] = useState([]);
  const addNewItem = (inputTodo, inputDate) => {
    setTodos((curValues) => [
      ...curValues,
      { name: inputTodo, date: inputDate },
    ]);
  };

  //handle delete event
  const deleteItem = (todoItem) => {
    const newTodos = todos.filter((item) => item.name != todoItem);
    setTodos(newTodos);
  };

  return (
    <TodoItemContext.Provider
      value={{ todos: todos, addNewItem: addNewItem, deleteItem: deleteItem }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <Message></Message>
        <TodoItems></TodoItems>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
