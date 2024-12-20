import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";

export function AddTodo({handleAdd}) {
  let [inputTodo,setInputTodo]=useState("");
  let [inputDate,setInputDate]=useState("");

  const onChangeTodo=(event)=>{ 
      setInputTodo(event.target.value);
  }

  const onChangeDate=(event)=>{
    setInputDate(event.target.value);
  }

  const handleOnClick=(event)=>{
    console.log(event)
    event.preventDefault();
    handleAdd(inputTodo,inputDate);
    setInputTodo("");
    setInputDate("");

  }
  return (
    <div className="container ">
      <form className="row justify-content-md-center row-mg" onSubmit={handleOnClick}>
        <div className="col-3">
          <input type="text" placeholder="Enter todo here" value={inputTodo} onChange={onChangeTodo}/>
        </div>
        <div className="col-2">
          <input type="date"  value={inputDate} onChange={onChangeDate}/>
        </div>
        <div className="col-1 ">
          <button  type="submit"  className="btn btn-success" >
          <MdAddToPhotos />
          </button>
        </div>
      </form>
    </div>
  );
}
