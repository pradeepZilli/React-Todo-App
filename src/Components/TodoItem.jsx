export function TodoItem() {

  let todo="Buy Milk";
  let date="10/10/2024"
  return (
    <div className="container todo-items">
      <div className="row justify-content-md-center row-mg">
        <div className="col-3">
          <p>{todo}</p>
        </div>
        <div className="col-2">
          <p>{date}</p>
        </div>
        <div className="col-1 ">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
