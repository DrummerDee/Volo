import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // e.preventDefault();
    console.log("HAI");

    const response = fetch("http://localhost:1212/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.removeItem("VoloLoggedIn");
    navigate("/login");
  };

  return (
    <>
      <header>
        <div>
          <h1>Welcome user</h1>
          <input
            onClick={handleSubmit}
            type="submit"
            value="Log Out"
            id="log__out"
          />
        </div>
      </header>
      <main className="container">
        <section className="containerleft">
          <h2> Let's make a list... Together </h2>
          <div className="leftwrapper"></div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
