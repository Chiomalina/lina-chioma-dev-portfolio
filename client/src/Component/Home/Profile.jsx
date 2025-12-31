import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillGooglePlusSquare } from "react-icons/ai";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Typewriter } from "react-simple-typewriter";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=61556737950018">
                <IoLogoFacebook color="black" />
              </a>
              <a href="#">
                <AiFillGooglePlusSquare color="black" />
              </a>
              <a href="https://www.instagram.com/chiomaanaso.codes/">
                <FaInstagram color="black" />
              </a>
              <a href="https://www.youtube.com/@ChiomaAnaso-b5m4y">
                <TfiYoutube color="black" />
              </a>
              <a href="#">
                <FaTwitter color="black" />
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span>
              {" "}
              Hello, I'm <span className="highlighted-text">Chioma</span>
            </span>
          </div>

          {/* Typewriter Effect*/}
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <span>
                  <Typewriter
                    words={[
                      "💻 a Full-Stack Developer",
                      "🚀 building scalable web apps",
                      "🎨 creating clean APIs & UIs",
                      "🧠 turning ideas into products",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1200}
                  />
                </span>
              </h1>
            </span>
          </div>

          {/* Description*/}
          <h1>
            <span className="profile-role-tagline">
              Building applications with fron and backend operations
            </span>
          </h1>

          {/* Profile Options*/}
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="../../../../public/resume.pdf"
              download="Chioma chiomacv.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>

        {/* Picture Component*/}
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
