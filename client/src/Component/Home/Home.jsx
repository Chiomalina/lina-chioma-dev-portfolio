import React from "react";
import Profile from "../Profile/Profile.jsx";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />

      
      <Footer />
    </div>
  );
}

export default Home;
