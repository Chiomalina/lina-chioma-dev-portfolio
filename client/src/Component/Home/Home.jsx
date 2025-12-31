import React from "react";
import Profile from "../Profile/Profile.jsx";
import Footer from "./Footer/Footer.jsx";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Profile />
      <Footer />
    </div>
  );
}

export default Home;
