import "./global.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPass from "./pages/ForgotPass";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./middleware/RequireAuth";
import RedirectIfAuthenticated from "./middleware/RedirectIfAuthenticated";

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
