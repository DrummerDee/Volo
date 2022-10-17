import React from "react"
// import lamp from "../assets/lamp.png"
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


const Homepage = () => {
    return (
    <div class="container">
        <main>
        <header>
        <div>
        <h1>Welcome to Volo</h1>
        </div>
    </header> 
    <section className="containerleft"> 
        <h2> Let's make a list... Together </h2>
        <div className="leftwrapper">
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href="/signUp"
            >Sign Up
        </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href="/login"
            >
             Login
            </Button>
            
        </div>
    </section>
    <h5>Photo by <a href="https://unsplash.com/@cathrynlavery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3E"> Cathryn Lavery </a> on <a href="https://unsplash.com/s/photos/list?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3E"> Unsplash </a></h5>
        </main>
    </div>
)}

export default Homepage