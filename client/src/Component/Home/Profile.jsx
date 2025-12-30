import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillGooglePlusSquare } from "react-icons/ai";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
