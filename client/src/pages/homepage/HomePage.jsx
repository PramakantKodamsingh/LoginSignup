import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };
  return (
    <div id="cont">
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default HomePage;
