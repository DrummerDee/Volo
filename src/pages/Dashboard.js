import React from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("VoloUser"));


  return (
    <div className="dashboard">
      <header>
        <MenuBar />
      </header>
      <div className="container">
        <div className="main">
        <section className="containerleft">
            <div>
              <h1>Welcome {user.userName}</h1>
            
            </div>
            <h2> Let's make a list... Together </h2>
            <div className="leftwrapper"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
