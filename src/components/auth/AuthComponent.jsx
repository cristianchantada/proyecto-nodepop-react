import { Navigate } from "react-router-dom";

function AuthComponent({isLogged, children}){

  if(!isLogged){
    return <Navigate to='/login' />
  } else {
    return (
      <div className="container authComponentContainer">
        {children}
      </div>
    );
  }
}

export default AuthComponent;