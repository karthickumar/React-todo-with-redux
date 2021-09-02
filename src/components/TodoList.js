import React from "react";
import { connect } from "react-redux";
import "./TodoList.css";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos = [] } = props;

  return (
    <div className="todo-list-container">
      {todos?.map((todo, idx) => (
        <TodoItem key={idx} todo={todo} idx={idx} />
      ))}
    </div>
  );
}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(TodoList);
