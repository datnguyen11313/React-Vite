import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("DatNguyen");
  const { addNewTodo } = props;
  const handleClick = () => {
    addNewTodo(valueInput);
  };
  const handleonChange = (name) => {
    setValueInput(name);
  };
  return (
    <div>
      <input
        onChange={(event) => handleonChange(event.target.value)}
        className="todo-new"
        type="text"
      ></input>
      <button
        onClick={handleClick}
        style={{ cursor: "pointer" }}
        className="button-add"
      >
        Add
      </button>
      <div>My text input is = {valueInput}</div>
    </div>
  );
};

export default TodoNew;
