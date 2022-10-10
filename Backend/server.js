const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser'); //parse cookies for authentication
const bcrypt = require('bcryptjs'); //hashes the passwords 
const sessions = require('express-session');
const app = express();
const PORT = process.env.REACT_APP_PORT;
require('dotenv').config()

//middleware
app.use(cors({
    origin: 'http://localhost:3000', // location of our react application, once hosted this will change
    credientals: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//sessions setup 
app.use(sessions ({
    secret: 'daddylonglegs',
    resave: true,
    saveUninitialized: true
}))

//Cookie parser setup 
app.use(cookieParser('daddylonglegs')) // secret code from the sessions

//set up routes here -- could do routes & controller not 100% neccessary 
app.post('/login', (req,res) => {
    console.log(req.body)
})
app.post('/signup', (req,res) => {
    console.log(req.body)
})
app.get('/user', (req,res) => {})

//port listener 
app.listen(process.env.REACT_APP_PORT || PORT , () => {
    console.log('Server is running just fine. alirght alright alright');
})
