import { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoItemContext } from "../Store/todo-items-store";

const TodoItems = () => {
  const obj = useContext(TodoItemContext);
  const todos = obj.todos;
  return (
    <>
      {todos.map((item) => (
        <TodoItem
          key={todos}
          todoItem={item.name}
          todoDate={item.date}
        ></TodoItem>
      ))}
    </>
  );
};
export default TodoItems;
