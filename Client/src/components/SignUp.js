import React, {useState} from 'react';
import {Link} from "react-router-dom";
import lamp from "../assets/lamp.png";
import axios from 'axios';
// import FaEye from 'react-icons/fa';
// import FaEyeSlash from 'react-icons/fa';

const SignUp = () => {
//set up useStates 
const [registerUsername,setRegisterUsername] = useState('')
const [registerPassword, setRegisterPassword] = useState('')
const [registerEmail,setRegisterEmail] = useState('')

//sign up function 
const signUp = () => {
    axios({
        method: 'POST',
        data: {
            email: registerEmail,
            username: registerUsername,
            password: registerPassword
        },
        withCredentials: true,
        url: 'http://localhost:3352/signup',
    }).then((res) => console.log(res));
};
    return (
<main>
<h1> Welcome Shopper </h1>
<Link to="/"><img src={lamp} alt='black genie lamp'/></Link>
<form>
    <div>
        <label> Email </label>
        <input type="email" name="email" placeholder="Enter Email" autoComplete onChange={(e) => setRegisterEmail(e.target.value)}/>
    </div>
    <div>
        <label> Username </label>
        <input type="text" name="userName" placeholder="Enter UserName" autoComplete onChange={(e) => setRegisterUsername(e.target.value)}/>
        
    </div>
    <div>
        <label> Password </label>
        <input type="password" name="password" placeholder="Enter Password" id="password" onChange={(e) => setRegisterPassword(e.target.value)} />
        <span className="eye">
            <img src='#' id="togglePassword" alt='eye icon'/>
        </span>
    </div>
    <div>
        <label> Confirm Password </label>
        <input type="password" name="confirmPassword" placeholder="Confirm Password" id="password2"/>
        <span className="eye">
            <i className="fa-sharp fa-solid fa-eye-slash" id="togglePassword2"></i>
        </span>
    </div>
    <input type="submit" value="Sign In" id="sign__in" onClick={signUp}/>
</form>
</main>
)}

export default SignUp