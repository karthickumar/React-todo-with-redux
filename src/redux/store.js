import { createStore, applyMiddleware, combineReducers } from "redux";
import { todoReducer } from "./reducer/addTodo.reducer";
import { userReducer } from "./reducer/user.reducer";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ todoReducer, userReducer });
export const todoStore = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);
