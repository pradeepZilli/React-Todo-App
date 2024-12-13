import { AppName } from "./Components/AppName";
import { AddTodo } from "./Components/AddTodo";
import { TodoItem } from "./Components/TodoItem";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
    </center>
  );
}

export default App;
