import React, { useRef, useEffect } from "react";
import { v4 as uniqueId } from "uuid";
import { useDispatch } from "react-redux";
import { addTodos } from "../Redux/Actions/todoActions";
import Filter from "./Filter";

export default function AddTodo() {
  const todoRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    todoRef.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    const doName = todoRef.current.value;
    if (doName) {
      const todo = {
        id: uniqueId(),
        name: doName,
        isCompleted: false,
      };
      dispatch(addTodos(todo));
      todoRef.current.value = "";
    } else {
      alert("Vui long nhap cong viec");
    }
  };

  return (
    <>
      <Filter />
      <br />
      <form onSubmit={handleAdd}>
        <div className="input-group">
          <input
            type={"text"}
            className="form-control"
            ref={todoRef}
            placeholder="Name..."
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
