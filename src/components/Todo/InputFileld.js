import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodoAction } from "../../redux/action/todo.action";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
    this.inputref = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.todoSelected !== "" && state.todo === "") {
      return { ...state, todo: props.todoSelected };
    }
  }

  onValueChange() {
    const val = this.inputref.current.value;
    this.setState({ todo: val });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  }

  render() {
    return (
      <form onSubmit={(event) => this.onSubmit(event)}>
        <input
          type="text"
          placeholder="Enter Your Todo"
          ref={this.inputref}
          value={this.state.todo}
          onChange={() => this.onValueChange()}
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodoAction(todo))
});

const mapStateToProps = ({ todoReducer }) => ({
  todoSelected: todoReducer.todoSelected
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
