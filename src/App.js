import "./styles.css";
import InputField from "./components/InputFileld.js";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <InputField />
      <TodoList />
    </div>
  );
}
