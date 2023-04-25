import React, { useState } from "react";
import { userLogin } from "../../api/service";

function LoginPage({handleLogin}){

  const[credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    
    console.log(credentials);
    console.log(event.target[0].value);
    console.log(event.target[1].value);

    setCredentials({...credentials,
      email: event.target[0].value,
      password: event.target[1].value
    });

/*     setCredentials({
      email: event.target[0].value,
      password: event.target[1].value
    }); */

    console.log(credentials);
    
    const token = userLogin(credentials);
    
    if(token){
      handleLogin();
    }
    
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