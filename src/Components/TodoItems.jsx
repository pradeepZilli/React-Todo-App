import { TodoItem } from "./TodoItem";
const TodoItems = ({todos,handleDelete }) => {
  return (
    <>
    {todos.map(item =>(
     <TodoItem  key={item.name}  todoItem={item.name} todoDate={item.date} handleDelete={handleDelete}></TodoItem>
    ))}
    </>
  );
};
export default TodoItems;
