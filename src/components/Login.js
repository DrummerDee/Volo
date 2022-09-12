import React from "react"
import {Link} from "react-router-dom"



const Login = () => {
    return (
    <>
<h1> Welcome Back Shopper </h1>
    <form action="/login" method="POST" autocomplete="off">
        <label> Email </label>
        <input type="email" name="email" />
        <label> Password </label>
        <input type="password" name="password" />
        <div id="remember">
            <Link to ="/ForgotPass"><button id="forgotPwdBtn"> Forgot Password </button></Link>
        </div>
        <input type="submit" value="Sign In" id="submit"/>
    </form>
    <div class="text"> 
        <h4> New Shopper? <a href="/signup"> Sign Up </a></h4>
    </div>
</>
)}
export default Login