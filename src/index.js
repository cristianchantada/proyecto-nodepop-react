import configureStore from "./reactRedux/reduxStore";
import { setRequestHeaders } from "./api/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import "./index.css";

const token = localStorage.getItem("auth");

if (token) {
  setRequestHeaders(token);
}

const router = createBrowserRouter([{
  path: '*',
  element: <App />
}]);
const store = configureStore({auth: !!token}, {router});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
/*   <React.StrictMode> */
    <Provider store={store}> 
      <RouterProvider router={router}>
        <App isToken={!!token} />
      </RouterProvider>
    </Provider>
/*   </React.StrictMode> */
);