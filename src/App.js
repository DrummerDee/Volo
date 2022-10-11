import "./global.css";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPass from "./components/ForgotPass";
import Dashboard from "./components/Dashboard";
import RequireAuth from "./components/RequireAuth";
import RedirectIfAuthenticated from "./components/RedirectIfAuthenticated";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<RedirectIfAuthenticated Component={Homepage} />}
        />
        <Route
          path="/login"
          element={<RedirectIfAuthenticated Component={Login} />}
        />
        <Route
          path="/signUp"
          element={<RedirectIfAuthenticated Component={SignUp} />}
        />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route
          path="/dashboard"
          element={<RequireAuth Component={Dashboard} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
