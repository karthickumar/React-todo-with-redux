const initialState = {
  todos: [],
  todoSelected: "",
  selectedTodoIdx: ""
};

export const todoReducer = (state = initialState, action) => {
  console.log("[Reducer] - ", action);
  switch (action.type) {
    case "ADD_TODO":
      const todos = [...state.todos];
      if (state.selectedTodoIdx) {
        todos[state.selectedTodoIdx] = action.payload;
      } else {
        todos.push(action.payload);
      }
      return {
        ...state,
        todoSelected: "",
        selectedTodoIdx: "",
        todos: todos
      };
    case "DELETE_TODO":
      let todoList = [...state.todos];
      todoList.splice(action.payload, 1);
      return {
        ...state,
        todoSelected: "",
        selectedTodoIdx: "",
        todos: todoList
      };
    case "SELECT_TODO":
      return {
        ...state,
        selectedTodoIdx: action.payload,
        todoSelected: state.todos[action.payload]
      };
    default:
      return state;
  }
};
