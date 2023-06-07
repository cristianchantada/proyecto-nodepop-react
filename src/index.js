import configureStore from "./reactRedux/reduxStore";
import { setRequestHeaders } from "./api/client";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import "./index.css";

const token = localStorage.getItem("auth");

if (token) {
  setRequestHeaders(token);
}

const store = configureStore({auth: !!token});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <App isToken={!!token} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
