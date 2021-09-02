import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { todoStore } from "./redux/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={todoStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
