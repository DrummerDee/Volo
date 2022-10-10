import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate()

  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the confirm password change
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  const user = {
    userName: name,
    email,
    password,
    confirmPassword,
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(true);
      setErrorMessage("Please fill all the fields");
    } else {
      const response = await fetch("http://localhost:1212/signup", {
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
        setSubmitted(false);
        setErrorMessage(data.error);
      } else {
        setSubmitted(true);
        console.log("loggedIn");
        localStorage.setItem("VoloLoggedIn", true);
        localStorage.setItem("VoloUser", JSON.stringify(data));
        navigate("/dashboard");
      }
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
        {displayLoginLink()}
      </div>
    );
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

  //Show login page if registered
  const displayLoginLink = () => {
    return (
      <div>
        <h1>
          <Link to="/Login"> Login</Link>to your new account
        </h1>
      </div>
    );
  };

  return (
    <main>
      <h1> Welcome Shopper </h1>
      <form action="" method="POST">
        <div className="messages">
          {displayErrorMessage()}
          {successMessage()}
        </div>

        <div>
          <label> Username </label>
          <input
            onChange={handleName}
            type="text"
            name="userName"
            placeholder="Enter User Name"
          />
        </div>
        <div>
          <label> Email </label>
          <input
            onChange={handleEmail}
            type="email"
            name="email"
            placeholder="Enter Email"
          />
        </div>
        <div>
          <label> Password </label>
          <input
            onChange={handlePassword}
            type="password"
            name="password"
            placeholder="Enter Password"
            id="password"
          />
          <span className="eye">
            <i
              className="fa-sharp fa-solid fa-eye-slash"
              id="togglePassword"
            ></i>
          </span>
        </div>
        <div>
          <label> Confirm Password </label>
          <input
            onChange={handleConfirmPassword}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            id="password2"
          />
          <span className="eye">
            <i
              className="fa-sharp fa-solid fa-eye-slash"
              id="togglePassword2"
            ></i>
          </span>
        </div>
        <input
          onClick={handleSubmit}
          type="submit"
          value="Sign In"
          id="sign__in"
        />
      </form>
    </main>
  );
};

export default SignUp;
