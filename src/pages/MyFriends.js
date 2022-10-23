import React from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import SideBar from "../components/SideBar";

const Friends = () => {
  const user = JSON.parse(localStorage.getItem("VoloUser"));

  return (
    <>
      <div className="dashboard">
        <header>
          <MenuBar className="menuBar" />
        </header>
        <div class="friends">
          <div class="sideBar">
            <SideBar />
          </div>
          <div class="friends-content">
            <h2> My FRIENDS</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
