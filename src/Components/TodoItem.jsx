import { RiDeleteBin2Fill } from "react-icons/ri";
import { TodoItemContext } from "../Store/todo-items-store";
import { useContext } from "react";
export function TodoItem({ todoItem, todoDate }) {
  const { deleteItem } = useContext(TodoItemContext);
  return (
    <div className="container todo-items">
      <div className="row justify-content-md-center row-mg">
        <div className="col-3">
          <p>{todoItem}</p>
        </div>
        <div className="col-2">
          <p>{todoDate}</p>
        </div>
        <div className="col-1 ">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              deleteItem(todoItem);
            }}
          >
            <RiDeleteBin2Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
