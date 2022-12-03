export const fetchTodos = () => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3004/todos?`);
    const data = await res.json();
    dispatch({
      type: "todos/fetch",
      payload: data,
    });
  };
};

export const FilterTodos = (types) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3004/todos?isCompleted=${types}`);
    const data = await res.json();
    dispatch({
      type: "todos/filter",
      payload: data,
    });
  };
};

export const addTodos = (todo) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:3004/todos?", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (res.ok) {
      dispatch({
        type: "todos/add",
        payload: todo,
      });
    }
  };
};

export const deleteTodos = (id, index) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3004/todos/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      dispatch({
        type: "todos/delete",
        payload: id,
      });
    }
  };
};

export const completedTodo = (id, index, status) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3004/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: status }),
    });
    if (res.ok) {
      dispatch({
        type: "todos/completed",
        payload: {
          index: index,
          status: status,
        },
      });
    }
  };
};

export const editTodo = (id, index, title) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3004/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: title }),
    });
    if (res.ok) {
      dispatch({
        type: "todos/edit",
        payload: {
          id: id,
          title: title,
          index: index,
        },
      });
    }
  };
};
