import React from "react";
import ShowTodos from "./ShowTodos";
import "./Todo.scss";
import AddTodo from "./AddTodo";

export default function Todos() {
  return (
    <div className="container ">
      <div className="todos mx-auto">
        <h2>Todos App</h2>
        <ShowTodos />
        <hr />
        <AddTodo />
      </div>
    </div>
  );
}
