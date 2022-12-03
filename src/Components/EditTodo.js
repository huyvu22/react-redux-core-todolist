import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo } from "./../Redux/Actions/todoActions";
import { todoSelector } from "../Redux/Selectors/todoSelector";

const ModalShowEditTodo = ({ show, setShow, dataEdit }) => {
  const handleClose = () => {
    setShow(false);
  };

  const [newname, setNewname] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(todoSelector);

  const { todoList } = todos;

  useEffect(() => {
    setNewname(dataEdit.name);
  }, [show]);

  const handleSaveUpdate = async () => {
    let index = todoList.findIndex((todo) => todo.id === dataEdit.id);
    dispatch(editTodo(dataEdit.id, index, newname));
    setShow(false);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            <h5>Title</h5>
          </label>
          <input
            autoFocus
            type="text"
            id="myInput"
            value={newname}
            onChange={(e) => setNewname(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveUpdate()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalShowEditTodo;
