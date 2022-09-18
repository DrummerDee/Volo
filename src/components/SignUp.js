import React from 'react';
import {Link} from "react-router-dom";
import lamp from "../assets/lamp.png";
// import FaEye from 'react-icons/fa';
// import FaEyeSlash from 'react-icons/fa';

const SignUp = () => {
    return (
<main>
<h1> Welcome Shopper </h1>
<Link to="/"><img src={lamp} alt='black genie lamp'/></Link>
<form action="/signup" method="POST">
    <div>
        <label> Username </label>
        <input type="text" name="userName" placeholder="Enter User Name"/>
    </div>
    <div>
        <label> Email </label>
        <input type="email" name="email" placeholder="Enter Email"/>
    </div>
    <div>
        <label> Password </label>
        <input type="password" name="password" placeholder="Enter Password" id="password" />
        <span class="eye">
            <img src='#' id="togglePassword" alt='eye icon'/>
        </span>
    </div>
    <div>
        <label> Confirm Password </label>
        <input type="password" name="confirmPassword" placeholder="Confirm Password" id="password2"/>
        <span class="eye">
            <i class="fa-sharp fa-solid fa-eye-slash" id="togglePassword2"></i>
        </span>
    </div>
    <input type="submit" value="Sign In" id="sign__in"/>
</form>
</main>
)}

export default SignUp