import { useContext } from "react";
import { TodoItemContext } from "../Store/todo-items-store";
export function Message() {
  const { todos } = useContext(TodoItemContext);
  return todos.length === 0 && <h1>No work for today Enjoy</h1>;
}
