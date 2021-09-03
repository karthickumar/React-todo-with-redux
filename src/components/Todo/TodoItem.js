import React from "react";
import { connect } from "react-redux";
import {
  deleteTodoAction,
  todoSelectionAction
} from "../../redux/action/todo.action";

function TodoItem(props) {
  console.log(props);
  const { todo, idx, deleteTodo, selectTodo } = props;

  const todoItemRemove = (event) => {
    event.preventDefault();
    deleteTodo(idx);
  };

  const todoSelector = (event) => {
    event.preventDefault();
    selectTodo(idx);
  };

  return (
    <div className="todo-list-item">
      <div className="todo-item" onClick={todoSelector}>
        {todo}
      </div>
      <div className="todo-item-remove" onClick={todoItemRemove}>
        x
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (idx) => dispatch(deleteTodoAction(idx)),
    selectTodo: (idx) => dispatch(todoSelectionAction(idx))
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
