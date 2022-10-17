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
<<<<<<< HEAD
<header>
=======
      <div class="main">
      <header>
>>>>>>> origin/latest
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
<<<<<<< HEAD
      <main>
=======
>>>>>>> origin/latest
        <section className="containerleft">
          <h2> Let's make a list... Together </h2>
          <div className="leftwrapper"></div>
        </section>
<<<<<<< HEAD
      </main>
=======
      </div>

>>>>>>> origin/latest
    </div>
  );
};

export default Dashboard;
