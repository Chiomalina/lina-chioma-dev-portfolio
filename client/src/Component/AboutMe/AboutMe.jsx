import React, { useEffects } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubcription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANT = {
    description:
      "Full-stack developer specializing in scalable web applications, API-driven architectures, and modern frontend systems. Experienced in building production-ready solutions using React, Node.js, Python, PostgreSQL, and third-party integrations such as Stripe and AI services. Strong engineering foundation with a focus on clean code, maintainability, and real-world problem solving.",

    highlights: {
      bullets: [
        "Full-stack web application development",
        "Modern, responsive user interfaces with React",
        "API design and backend development (Node.js & Python)",
        "Payment and external service integrations (Stripe, APIs)",
        "Database design and management (PostgreSQL, SQL)",
        "AI-powered features and automation",
        "Clean architecture, maintainable code, and best practices",
      ],
      heading: "Here are a Few Higlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANT.highlights.bullets.map((value, index) => {
      return (
        <div className="highlight" key={index}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      );
    });
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANT.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANT.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"> Hire Me </button>
              <a
                href="../../../../public/resume.pdf"
                download="Chioma chiomacv.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
