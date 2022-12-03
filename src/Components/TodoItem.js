import React from "react";
import clsx from "clsx";

export default function TodoItem({
  onCompletedTodo,
  onDeleteTodo,
  name,
  isCompleted,
  onEditTodo,
}) {
  return (
    <div className={clsx("todos--item d-flex", isCompleted && "completed")}>
      <input
        type={"checkbox"}
        onChange={onCompletedTodo}
        checked={isCompleted}
      />
      <span className="m-2">{name}</span>
      <button className="btn btn-primary mb-2" onClick={onDeleteTodo}>
        Delete
      </button>
      <button className="btn btn-warning mb-2" onClick={onEditTodo}>
        Edit
      </button>
    </div>
  );
}
