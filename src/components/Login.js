import React, { useState } from "react";
import StyledLogin from "../styledComponents/StyledLogin";
import axios from "axios";
import { Link } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [credentials, setCredentials] = useState(initialState);
  const { history, setLoggedIn } = props;

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://ft-anywhere-fitness-3.herokuapp.com/api/auth/login",
        credentials
      )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledLogin>
      <div className="container">
        <div className="row">
          <h2>Login</h2>
          <form onSubmit={login}>
            <div className="col">
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
              <button className="md-button">Log in</button>
            </div>
            <div className="input-div">
              <p>
                Don't have an account? <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
