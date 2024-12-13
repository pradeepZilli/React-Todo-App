export function AddTodo() {
  return (
    <div className="container ">
      <div className="row justify-content-md-center row-mg">
        <div className="col-3">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-2">
          <input type="date" />
        </div>
        <div className="col-1 ">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
