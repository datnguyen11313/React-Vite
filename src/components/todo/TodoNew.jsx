const TodoNew = (props) => {
  console.log("Check", props);
  const { addNewTodo } = props;
  const handleClick = () => {
    alert("click me");
  };
  const handleonChange = (name) => {
    console.log("handle on change", name);
  };
  return (
    <div>
      <input
        onChange={(event) => handleonChange(event)}
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
    </div>
  );
};

export default TodoNew;
