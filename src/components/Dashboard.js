import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('VoloUser'))
  const handleSubmit = () => {

    const response = fetch("http://localhost:1212/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.removeItem("VoloLoggedIn");
    localStorage.removeItem("VoloUser");
    navigate("/login");
  };

  return (
    <div class="container">
      <div class="main">
      <header>
        <div>
          <h1>Welcome {user.userName}</h1>
          <input
            onClick={handleSubmit}
            type="submit"
            value="Log Out"
            id="log__out"
          />
        </div>
      </header>
        <section className="containerleft">
          <h2> Let's make a list... Together </h2>
          <div className="leftwrapper"></div>
        </section>
      </div>

    </div>
  );
};

export default Dashboard;
