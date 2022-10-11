import React from "react";

const ForgotPass = () => {
  return (
    <>
      <h3>Forgot Password</h3>
      <form action="/login" method="POST" autocomplete="off">
        <label>Enter Email: </label>
        <input type="email" name="email" />
        <span className="forgot">-OR-</span>
        <h3>Enter security Question answer:</h3>

        <select name="security" id="security">
          <option value="pet">What is the name of your favorite pet?</option>
          <option value="school">
            What was the name of your elementary school?
          </option>
          <option value="food">What was your favorite food as a child?</option>
          <option value="car">What was the make of your first car?</option>
        </select>
        <input type="password" name="password" />

        <input type="submit" value="Submit" id="submit" />
      </form>
    </>
  );
};
export default ForgotPass;
