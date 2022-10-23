const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const passport = require("passport");
var cookieParser = require('cookie-parser')
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const todoRoutes = require("./routes/todos");
const friendRoutes = require("./routes/friends");
const path = require("path");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    proxy: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(cookieParser("keyboard cat"))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use("/", mainRoutes);
app.use("/todos", todoRoutes);
app.use("/friends", friendRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
