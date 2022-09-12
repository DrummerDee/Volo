import './global.css';
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import ForgotPass from './components/ForgotPass';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
      </Routes>
    </Router>
  );
}

export default App;
