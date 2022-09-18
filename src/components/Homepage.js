import React from "react";
import {Link} from "react-router-dom";
import lamp from "../assets/lamp.png";



const Homepage = () => {
    return (
    <>
    <header>
        <div>
        <h1>Welcome to Volo</h1>
        <Link to="/"><img src={lamp} alt='black genie lamp'/></Link>
        </div>
    </header> 
    <main class="container">
    <section class="containerleft"> 
        <h2> Let's make a list... Together </h2>
        <div class="leftwrapper">
            <Link to="/Login"> Login</Link>
            <Link to="/signup"> Sign Up</Link>
        </div>
    </section>
</main>
    </>
    )}

export default Homepage