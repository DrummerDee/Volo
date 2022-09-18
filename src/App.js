import './global.css';
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import ForgotPass from './components/ForgotPass';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
