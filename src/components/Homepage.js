import React from "react"
import {Link} from "react-router-dom"
import lamp from "../assets/lamp.png"



const Homepage = () => {
    return (<>
    <header>
        <div>
        <h1>Welcome to Volo</h1>
        <img src={lamp}/>
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
<h5>Photo by <a href="https://unsplash.com/@cathrynlavery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3E"> Cathryn Lavery </a> on <a href="https://unsplash.com/s/photos/list?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3E"> Unsplash </a></h5>
    </>)}

export default Homepage