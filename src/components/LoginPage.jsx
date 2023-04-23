import React, { useState} from "react";
import { userLogin } from "../api/service";

function LoginPage(){

  const[login, setLogin] = useState(false);
  const[credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setCredentials({
        email: event.target[0].value,
        password: event.target[1].value
      }
    )

    userLogin(credentials);
  }

  return (
    <div className="container login">
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="username" />
        <input name="password" type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;