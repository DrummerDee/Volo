import React , {useState} from "react";
import {Link} from "react-router-dom";
import lamp from "../assets/lamp.png";



const Login = () => {
//set use states 
const [loginUsername,setLoginUsername] = useState('')
const [loginPassword, setLoginPassword] = useState('')

//login function 
const login = () => {}
    return (
    <>
<h1> Welcome Back Shopper </h1>
<Link to="/"><img src={lamp} alt='black genie lamp'/></Link>
    <form action="/login" method="POST" autoComplete="off">
        <label> Username </label>
        <input type="username" name="username" onChange={(e) => setLoginUsername(e.target.value)} />
        <label> Password </label>
        <input type="password" name="password" onChange={(e) => setLoginPassword(e.target.value)}/>
        <div id="remember">
            <Link to ="/ForgotPass"><button id="forgotPwdBtn"> Forgot Password </button></Link>
        </div>
        <input type="submit" value="Sign In" id="submit" onClick={login}/>
    </form>
    <div class="text"> 
        <h4> New Shopper? <Link to ='/signup'> Sign Up </Link></h4>
    </div>
</>
)}
export default Login