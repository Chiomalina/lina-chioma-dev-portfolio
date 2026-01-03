import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.formDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : " "}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>;
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "Frontend Engineering (React)", ratingPercentage: 70 },
    { skill: "Backend Development (Node.js, Python)", ratingPercentage: 65 },
    { skill: "API Design & Integration", ratingPercentage: 65 },
    { skill: "Databases (PostgreSQL, SQL)", ratingPercentage: 65 },
    { skill: "Payment Systems (Stripe)", ratingPercentage: 60 },
    { skill: "AI & Automation", ratingPercentage: 55 },
    { skill: "HTML & CSS", ratingPercentage: 75 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "Dec-2025", toDate: "Jan-2026" },
      description:
        "A responsive, component-driven portfolio website built to present projects, skills, and experience in a clear, professional format. Designed with smooth navigation, scroll-based interactions, and a mobile-first layout.",
      subHeading: "Technologies Used: React (Vite), JavaScript, CSS, Bootstrap",
      features: [
        "Component-based architecture for reusable UI sections",
        "Scroll-based navigation and active section highlighting",
        "Fully responsive layout optimized for mobile and desktop",
        "Clean, maintainable styling with modern CSS practices",
      ],
    },
    {
      title: "Flask Movie App",
      duration: { fromDate: "Nov-2025", toDate: "Dec-2025" },
      description:
        "A production-ready Flask web application for managing a personal movie library. Features external data enrichment and AI-powered content generation, built using solid software engineering principles.",
      subHeading:
        "Technologies Used: Python (Flask), SQLAlchemy, SQLite, OMDb API, OpenAI, HTML, CSS, Bootstrap",
      features: [
        "CRUD functionality for managing a personal movie collection",
        "External movie data integration using the OMDb API",
        "AI-generated trivia, recommendations, and movie reviews",
        "Clean separation of concerns using OOP and modular design",
        "Database abstraction layer for scalable data management",
        "Deployment-ready configuration and error handling",
      ],
    },
    {
      title: "Chinny Confectionery Cake Website",
      duration: { fromDate: "Jun-2025", toDate: "Ongoing" },
      description:
        "A full-stack e-commerce cake customization platform designed for real-world business use, featuring a modern storefront and a scalable backend architecture.",
      subHeading:
        "Technologies Used: React, Medusa.js (v2), Node.js, PostgreSQL, Stripe, Resend, REST APIs",
      features: [
        "Product and variant management using Medusa’s modular architecture",
        "Dynamic pricing and customizable cake options",
        "Stripe payment integration with secure checkout workflows",
        "Webhook-based order creation and payment confirmation",
        "PostgreSQL-backed persistent data storage",
        "Transactional email notifications using Resend",
        "Scalable backend design suitable for production deployment",
      ],
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"MASTER SCHOOL BERLIN"}
        subHeading={"SOFTWARE ENGINEERING"}
        fromDate={"2024"}
        toDate={"2026"}
      />
      <ResumeHeading
        heading={"National Open University of Nigeria"}
        subHeading={"MASTERS BUSINESS ADMINISTRATION"}
        fromDate={"2012"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"Institute of Management and Technology"}
        subHeading={"HND CHEMICAL ENGINEERING"}
        fromDate={"2004"}
        toDate={"2009"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Cobel Contracting Nigeria"}
        subHeading={"Quality Assurance and Quality Control Officer"}
        fromDate={"2012"}
        toDate={"2016"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Developed and standardized a global quality management system in
          line with ISO 9001:2008 standards.
        </span>
        <br />
        <span className="resume-description-text">
          - Implemented statistical control tools and monitoring methods,
          resulting in a reduction of third-party rejection rates from 80% to 5%
          and a decrease in corrective-action costs by 40%.
        </span>
        <br />
        <span className="resume-description-text">
          - Directed internal audits and management reviews, promoting
          cross-team collaboration to address non-conformances, leading to a 50%
          decrease in defects.
        </span>
      </div>
      <ResumeHeading
        heading={"Yasnas Engineering Limited"}
        subHeading={"Quality Assurance and Quality Control Officer"}
        fromDate={"2011"}
        toDate={"2012"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Steered a team in charge of constructing 353 bearing piles and 500
          secant piles, laying the groundwork for the EKO Guest House project.
        </span>
        <br />
        <span className="resume-description-text">
          - Devised and executed a thorough inspection plan for piling operations,
          which streamlined processes and reduced project delays by 10%.
        </span>
      </div>

      <ResumeHeading
        heading={"Grand Petroleum"}
        subHeading={"Quality Assurance and Quality Control Officer"}
        fromDate={"2010"}
        toDate={"2011"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Established CAPA systems, effectively eliminating the use of
          substandard base oil and subsequently increasing profits by 20%.
        </span>
        <br />
        <span className="resume-description-text">
          - Oversaw Quality Assurance processes for lubricant blending.
        </span>
      </div>

      <div className="resume-screen-container" programming-skills-container key="programming-skills">
        {programmingSkillsDetails.map((skill, index) => (
            <div className="skill-parent" key={index}>
                <div className="heading-bullet"></div>
                <span>{skill.skill}</span>
            </div>
        ))}
      </div>
    </div>,
  ];

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubcription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div resume-container screen-container id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
      </div>
    </div>
  );
}

export default Resume;
