import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import API_URL from '../config/config'

const theme = createTheme();

const SignUp = () => {

  const navigate = useNavigate()

  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the confirm password change
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  const user = {
    userName: name,
    email,
    password,
    confirmPassword,
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(true);
      setErrorMessage("Please fill all the fields");
    } else {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        withCredentials: true,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      if (data.error) {
          console.log(data.error)
        setError(true);
        setSubmitted(false);
        setErrorMessage(data.error);
      } else {
        setSubmitted(true);
        console.log("loggedIn");
        localStorage.setItem("VoloLoggedIn", true);
        localStorage.setItem("VoloUser", JSON.stringify(data));
        navigate("/dashboard");
      }
    }
  };

  // Showing error message if error is true
  const DisplayErrorMessage = () => {
    return (
        error ?  <Alert severity="error">{errorMessage}</Alert> : ""
        );
  };

  return (
      <main>
      <h1> Welcome Shopper </h1>
        <DisplayErrorMessage />
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  onChange={handleName}
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  onChange={handleEmail}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handlePassword}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleConfirmPassword}
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                />
              </Grid>
            </Grid>
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
      {/* <form action="" method="POST">
        <div className="messages">
          {displayErrorMessage()}
          {successMessage()}
        </div>

        <div>
          <label> Username </label>
          <input
            onChange={handleName}
            type="text"
            name="userName"
            placeholder="Enter User Name"
          />
        </div>
        <div>
          <label> Email </label>
          <input
            onChange={handleEmail}
            type="email"
            name="email"
            placeholder="Enter Email"
          />
        </div>
        <div>
          <label> Password </label>
          <input
            onChange={handlePassword}
            type="password"
            name="password"
            placeholder="Enter Password"
            id="password"
          />
          <span className="eye">
            <i
              className="fa-sharp fa-solid fa-eye-slash"
              id="togglePassword"
            ></i>
          </span>
        </div>
        <div>
          <label> Confirm Password </label>
          <input
            onChange={handleConfirmPassword}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            id="password2"
          />
          <span className="eye">
            <i
              className="fa-sharp fa-solid fa-eye-slash"
              id="togglePassword2"
            ></i>
          </span>
        </div>
        <input
          onClick={handleSubmit}
          type="submit"
          value="Sign In"
          id="sign__in"
        />
      </form> */}
      </main>
  );
};

export default SignUp;
