import React, { useEffect } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { fetchTodos, FilterTodos } from "../Redux/Actions/todoActions";

const Filter = (props) => {
  const dispatch = useDispatch();

  const options = [
    { value: "null", label: "ALL" },
    { value: "true", label: "COMPLETE" },
    { value: "false", label: "INCOMPLETE" },
  ];
  const handleFilter = (e) => {
    let isCompleted = e.value;
    if (isCompleted === "null") {
      dispatch(fetchTodos());
    } else {
      dispatch(FilterTodos(isCompleted));
    }
  };
  useEffect(() => {}, []);
  return (
    <div style={{ color: "#000", cursor: "pointer", width: "50%" }}>
      <Select
        options={options}
        defaultValue={{ label: "ALL", value: "ALL" }}
        onChange={(e) => handleFilter(e)}
      />
    </div>
  );
};

export default Filter;
