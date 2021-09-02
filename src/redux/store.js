import { createStore, applyMiddleware } from "redux";
import { todoReducer } from "./reducer/addTodo.reducer";
import { logger } from "redux-logger";

export const todoStore = createStore(todoReducer, applyMiddleware(logger));
