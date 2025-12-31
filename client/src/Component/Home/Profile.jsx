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
            <a href="https://www.facebook.com/profile.php?id=61556737950018">
              <IoLogoFacebook color="black" />
            </a>
            <a href="">
              <AiFillGooglePlusSquare color="black" />
            </a>
            <a href="https://www.instagram.com/chiomaanaso.codes/">
              <FaInstagram color="black" />
            </a>
            <a href="https://www.youtube.com/@ChiomaAnaso-b5m4y">
              <TfiYoutube color="black" />
            </a>
            <a href="">
              <FaTwitter color="black" />
            </a>

            <div className="profile-details-name">
              <span>
                {" "}
                Hello, I'M <span className="highlighted-text">Chioma</span>
              </span>
            </div>

            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <span>
                    <Typewriter
                      words={[
                        "a Full Stack Developer 💻",
                        "MERN Stack Dev  📲",
                        "Cross Platform Dev 👩🏽‍💻",
                        "building projects 📽️",
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={80}
                      deleteSpeed={50}
                      delayedSpeed={1200}
                    />
                  </span>
                </h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
