export const addTodoAction = (todo) => ({
  type: "ADD_TODO",
  payload: todo
});

export const deleteTodoAction = (idx) => ({
  type: "DELETE_TODO",
  payload: idx
});

export const todoSelectionAction = (idx) => ({
  type: "SELECT_TODO",
  payload: idx
});
