import { RiDeleteBin2Fill } from "react-icons/ri";
export function TodoItem({todoItem,todoDate,handleDelete}) {
  return (
    <div className="container todo-items"  >
      <div  key={todoItem} className="row justify-content-md-center row-mg">
        <div className="col-3">
          <p>{todoItem}</p>
        </div>
        <div className="col-2">
          <p>{todoDate}</p>
        </div>
        <div className="col-1 ">
          <button type="button" className="btn btn-danger" onClick={()=>{handleDelete(todoItem)}}>
          <RiDeleteBin2Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
