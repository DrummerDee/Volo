import React from "react";
import { Link, Navigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <header>
        <div>
          <h1>Welcome user</h1>
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
