import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";

const App = () => {
  const datnguyen = "Nguyen Van Dat Arsenal";
  const age = 25;
  const data = {
    address: "hcm",
    country: "vietnam",
  };

  const addNewTodo = (name) => {
    alert(`Call me ${name}`);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <br></br>
      <TodoData name={datnguyen} age={age} data={data} />

      <div className="todo-image">
        <img className="logo" src={reactLogo}></img>
      </div>
    </div>
  );
};

export default App;
