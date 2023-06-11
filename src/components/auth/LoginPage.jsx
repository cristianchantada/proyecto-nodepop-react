import { authLogin, loginFailure, loginRequest, userInterfaceResetError } from "../../reactRedux/actions";
import { getUserInterface } from "../../reactRedux/selectors";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../common/Layout";
import "../../styles/LoginPage.css";

//TODO hacer los login failure, request, etc

function LoginPage() {

  const dispatch = useDispatch();
  const { error } = useSelector(getUserInterface);

  const resetError = () => {
    dispatch(userInterfaceResetError())

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    resetError();

    const credentials = {
      email: event.target.username.value,
      password: event.target.password.value
    };

    const checked = event.target.checkbox.checked;
    dispatch(authLogin(credentials, checked));

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