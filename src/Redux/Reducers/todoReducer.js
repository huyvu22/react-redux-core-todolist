const initialState = {
  todoList: [],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/fetch":
      return { ...state, todoList: action.payload };

    case "todos/filter":
      return { ...state, todoList: action.payload };

    case "todos/add":
      return { ...state, todoList: state.todoList.concat(action.payload) };

    case "todos/delete":
      const dataDelete = [...state.todoList];
      // dataDelete.splice(action.payload, 1);
      let data = dataDelete.filter((data) => data.id !== action.payload);
      return { ...state, todoList: data };

    case "todos/completed":
      const dataCompleted = [...state.todoList];
      dataCompleted[action.payload.index].isCompleted = action.payload.status;
      return { ...state, todoList: dataCompleted };

    case "todos/edit":
      let dataEdit = [...state.todoList];
      dataEdit[action.payload.index].name = action.payload.title;
      return { ...state, todoList: dataEdit };

    default:
      // throw new Error("Không tồn tại action " + action.type);
      //console.error("Không tồn tại action " + action.type);
      return state;
  }
};
