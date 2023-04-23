import React, { useEffect, useState} from "react";
import { userLogin } from "../api/service";

function LoginPage(){

  const[login, setLogin] = useState(false);
  const[credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  useEffect(() => {
      console.log(credentials);
      userLogin(credentials).then();
    }
  )

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
/*     setLogin(true); */
    setCredentials({
        username: event.target.value[0],
        password: event.target.value[1]
      }
    )
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="username" />
        <input name="password" type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;