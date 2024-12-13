import { AppName } from "./Components/AppName";
import { AddTodo } from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
function App() {
  const todos = [
    { name: "Buy Milk", date: "10/10/2024" },
    { name: "Home work", date: "1/10/2024" },
    { name: "sleep", date: "21/10/2023" },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todos={todos}></TodoItems>
    </center>
  );
}

export default App;
