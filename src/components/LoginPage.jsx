import React, { useEffect, useState} from "react";

function LoginPage(){

  const[login, setLogin] = useState(false);
  const[credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

/*   useEffect(() => {

    };
  ) */

  const handleSubmit = (event) => {
    console.log(event.target.username.value);
    setLogin(true);
    setCredentials(

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