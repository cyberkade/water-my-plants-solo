import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import * as Yup from "yup";

import StyledRegister from "../styledComponents/StyledRegister";

const initialState = {
  username: "",
  password: "",
  phoneNumber: "",
};

const Register = () => {
  const [credentials, setCredentials] = useState(initialState);
  const [phoneNumValue, setPhoneNumValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    phoneNumber: "",
  });
  const { push } = useHistory();

  const formSchema = Yup.object().shape({
    username: Yup.string()
      .trim()
      .required("A username is required")
      .min(3, "Username must include between 3-30 characters")
      .max(30, "Username must include between 3-30 characters"),
    password: Yup.string()
      .trim()
      .required("A password is required")
      .min(6, "Password must include between 6-30 characters")
      .max(30, "Password must include between 6-30 characters"),
    phoneNumber: Yup.string()
      .trim()
      .required("A phone number is required")
      .min(8, "Must be a valid phone number")
      .max(15, "Must be a valid phone number"),
  });

  useEffect(() => {
    formSchema.isValid(credentials).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [credentials]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://build-week-water-my-plants-1.herokuapp.com/api/auth/register",
        credentials
      )
      .then((res) => {
        console.log(res);
        push("/login");
      })
      .catch((err) => alert(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <StyledRegister>
      <div className="container">
        <div className="row">
          {errors.username.length > 0 && (
            <p className="errMsg">{errors.username}</p>
          )}
          {errors.password.length > 0 && (
            <p className="errMsg">{errors.password}</p>
          )}
          {errors.phoneNumber.length > 0 && (
            <p className="errMsg">{errors.phoneNumber}</p>
          )}
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="col">
              <div>
                <label>
                  Username
                  <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    value={credentials.username}
                  />
                </label>
              </div>
              <div>
                <label>
                  Password
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={credentials.password}
                  />
                </label>
              </div>
              <div>
                <label>
                  Phone Number
                  <input
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={handleChange}
                    value={credentials.phoneNumber}
                  />
                </label>
              </div>
              <div className="register-div">
                <button disabled={buttonDisabled} className="md-button">
                  Sign up
                </button>
              </div>

              <div>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </StyledRegister>
  );
};

export default Register;
