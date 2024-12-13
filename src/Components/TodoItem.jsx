export function TodoItem(props) {
  let {todoItem,todoDate}=props;
  console.log("items",props)
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
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
