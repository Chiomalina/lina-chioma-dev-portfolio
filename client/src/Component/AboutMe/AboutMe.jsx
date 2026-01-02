import React, { useEffects } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

function AboutMe(props) {
  return (
    <div className="about-me-container screen-container">
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
      </div>
    </div>
  );
}

export default AboutMe;
