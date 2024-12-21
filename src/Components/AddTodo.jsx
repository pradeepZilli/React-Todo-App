import { useRef, useContext } from "react";
import { MdAddToPhotos } from "react-icons/md";

import { TodoItemContext } from "../Store/todo-items-store";

export function AddTodo() {
  const todoName = useRef();
  const dueDate = useRef();
  const { addNewItem } = useContext(TodoItemContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    let todo = todoName.current.value;
    let date = dueDate.current.value;
    todoName.current.value = "";
    dueDate.current.value = "";
    addNewItem(todo, date);
  };
  return (
    <div className="container ">
      <form
        className="row justify-content-md-center row-mg"
        onSubmit={handleSubmit}
      >
        <div className="col-3">
          <input type="text" ref={todoName} placeholder="Enter todo here" />
        </div>
        <div className="col-2">
          <input type="date" ref={dueDate} />
        </div>
        <div className="col-1 ">
          <button type="submit" className="btn btn-success" title="add todo">
            <MdAddToPhotos />
          </button>
        </div>
      </form>
    </div>
  );
}
