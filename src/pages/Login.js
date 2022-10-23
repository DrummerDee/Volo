/* eslint-disable no-restricted-globals */

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import API_URL from '../config/config'


const theme = createTheme();

const Login = () => {
  const navigate = useNavigate();

  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const user = {
    email,
    password,
  };
  console.log(user);
  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
      setErrorMessage("Please fill all the fields");
      return;
    } else {
      const response = await fetch(`${API_URL}/login`, {
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
        setError(true);
        setErrorMessage(data.error);
      } else {
        setError(false);
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
        <h1> Welcome Back Shopper </h1>
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
            Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
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
            </Grid>
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  New user? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </main>
      
  );
};
export default Login;
