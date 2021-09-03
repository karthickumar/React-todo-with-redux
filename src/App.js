import "./styles.css";
import Todo from "./components/Todo/Todo";
import Users from "./components/Users/Users";

export default function App() {
  return (
    <div className="App">
      <h1>Redux & Thunk App</h1>
      <div className="todo-user-container">
        <div className="todo-container">
          <Todo />
        </div>
        <div className="user-container">
          <Users />
        </div>
      </div>
    </div>
  );
}
