/* eslint-disable no-restricted-globals */

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const user = {
    email,
    password,
  };
  console.log(user);
  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
      setErrorMessage("Please fill all the fields");
      return;
    } else {
      const response = await fetch("http://localhost:1212/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      if (data.error) {
        setError(true);
        setErrorMessage(data.error);
      } else {
        setError(false);
        console.log("loggedIn");
        localStorage.setItem("VoloLoggedIn", true);
        navigate("/dashboard");
      }
    }
  };

  // Showing error message if error is true
  const displayErrorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>{errorMessage}</h1>
      </div>
    );
  };
  return (
    <>
      <h1> Welcome Back Shopper </h1>
      <form action="" method="POST" autoComplete="off">
        <div className="messages">{displayErrorMessage()}</div>
        <label> Email </label>
        <input onChange={handleEmail} type="email" name="email" />
        <label> Password </label>
        <input onChange={handlePassword} type="password" name="password" />
        <div id="remember">
          <Link to="/ForgotPass">
            <button id="forgotPwdBtn"> Forgot Password </button>
          </Link>
        </div>
        <input
          onClick={handleSubmit}
          type="submit"
          value="Log In"
          id="log__in"
        />
      </form>
      <div className="text">
        <h4>
          {" "}
          New Shopper?{" "}
          <Link to="/SignUp">
            <button id="forgotPwdBtn"> Sign Up </button>
          </Link>
        </h4>
      </div>
    </>
  );
};
export default Login;
