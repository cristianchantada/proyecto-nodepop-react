import configureStore from "./reactRedux/reduxStore";
import { setRequestHeaders } from "./api/client";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

const token = localStorage.getItem("auth");

if (token) {
  setRequestHeaders(token);
}

const store = configureStore();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App isToken={!!token} />
    </BrowserRouter>
  </React.StrictMode>
);
