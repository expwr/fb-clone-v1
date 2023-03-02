// imports
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/icons/icons.css";
import "./styles/dark.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools()); // mk store 4 provider


ReactDOM.render(                    // render (load) elements
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,                      // first arg (html) for componenets
  document.getElementById("root")   // set root as second arg in render
);
