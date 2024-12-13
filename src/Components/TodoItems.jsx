import { TodoItem } from "./TodoItem";
const TodoItems = ({todos}) => {
  return (
    <>
    {todos.map(item =>(
     <TodoItem key="item.name" todoItem={item.name} todoDate={item.date}></TodoItem>
    ))}
    </>
  );
};
export default TodoItems;
