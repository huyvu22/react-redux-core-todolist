import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { todoSelector } from "../Redux/Selectors/todoSelector";
import {
  fetchTodos,
  deleteTodos,
  completedTodo,
} from "../Redux/Actions/todoActions";
import ModalShowEditTodo from "./EditTodo";

export default function ShowTodos() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [dataEdit, setDataEdit] = useState([]);

  const todos = useSelector(todoSelector);

  const { todoList } = todos;

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleDeleteTodo = async (id, index) => {
    if (window.confirm("Bạn có chắc")) {
      index = todoList.findIndex((todo) => todo.id === id);
      dispatch(deleteTodos(id, index));
    }
  };

  const handleCompletedTodo = async (id) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let status = todoList[index].isCompleted ? false : true;
    dispatch(completedTodo(id, index, status));
  };

  const handleEditTodo = (todo) => {
    setShow(true);
    setDataEdit(todo);
  };
  return (
    <div className="todos__list">
      {todoList.length > 0 &&
        todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onDeleteTodo={(e) => {
              e.preventDefault();
              handleDeleteTodo(todo.id);
            }}
            onCompletedTodo={() => {
              handleCompletedTodo(todo.id);
            }}
            onEditTodo={() => {
              handleEditTodo(todo);
            }}
          />
        ))}
      <ModalShowEditTodo show={show} setShow={setShow} dataEdit={dataEdit} />
    </div>
  );
}
