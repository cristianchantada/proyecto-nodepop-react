import { authLogin, loginFailure, loginRequest, userInterfaceResetError } from "../../reactRedux/actions";
import { getUserInterface } from "../../reactRedux/selectors";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../api/service";
import Layout from "../common/Layout";
import "../../styles/LoginPage.css";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(getUserInterface);

/*   const [error, setError] = useState(null); */

  const resetError = () => {
    dispatch(userInterfaceResetError())

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    resetError();
    const credentials = {
      email: event.target.username.value,
      password: event.target.password.value,
    };

    const checked = event.target.checkbox.checked;

      dispatch(authLogin(credentials, checked))
        .then( () => {
          const to = location.state?.from?.pathname || '/';
          navigate(to);
        })
  };

  return (
    <Layout>
      <div className="container login">
        <form id="loginForm" onSubmit={handleSubmit}>
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
          <label htmlFor="">
            <input name="checkbox" type="checkbox" />
            ¿Desea guardar la contraseña?
          </label>
          <button type="submit">Login</button>
        </form>
        {error && (
          <p>{error.message}<span onClick={resetError} className="delete-icon">X</span></p>
        )}
      </div>
    </Layout>
  );
}

export default LoginPage;