const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

exports.postLogin = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  if (validationErrors.length) {
    errors = validationErrors.reduce((acc, err) => acc + `${err.msg}, `, "");
    res.send({ error: errors.slice(0, -2) });
    return;
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.send({ error: "Invalid user/password" });
      return;
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      res.json(req.user);
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  console.log(req.user)
  req.logout(() => {
    console.log("User has logged out.");
  });
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
  });
};

exports.postSignup = (req, res, next) => {
  console.log(req.body.email);

  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  if (req.body.password !== req.body.confirmPassword)
    validationErrors.push({ msg: "Passwords do not match" });

  if (validationErrors.length) {
    errors = validationErrors.reduce((acc, err) => acc + `${err.msg}, `, "");
    res.send({ error: errors.slice(0, -2) });
    return;
  }

  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  User.findOne(
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        res.send({ error: "User already exists" });
        return;
      }
      user.save((err) => {
        if (err) {
          return next(err);
        }

        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.json(req.user);
        });
      });
    }
  );
};
