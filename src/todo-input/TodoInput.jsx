import { useState } from "react";
import { useDispatch } from "react-redux";
import "./todo-input.css";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  const handleClick = () => {
    if (newTodo === "") {
      return <p>fff</p>;
    }
    dispatch({
      type: "ADD_TODO",
      payload: {
        label: newTodo,
        id: Date.now(),
      },
    });
    setNewTodo("");
  };
  return (
    <div className="input-block">
      <input
        type="text"
        className="input"
        onChange={handleChange}
        value={newTodo}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleClick();
        }}
      />
      <div className="button-block">
        <button className="btn" onClick={handleClick}>
          Save Todo
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
