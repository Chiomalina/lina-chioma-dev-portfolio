import React, { useState, useEffect, useRef } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubcription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const detailsRef = useRef(null);

  const handleCarousal = (index) => {
    const offsetHeight = detailsRef.current?.offsetHeight ?? 460;

    setCarousalOffSetStyle({
      style: { transform: `translateY(${index * offsetHeight * -1}px)` },
    });
    setSelectedBulletIndex(index);
  };

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
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
      </div>
    );
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
    // 0) Education
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading="MASTER SCHOOL BERLIN"
        subHeading="SOFTWARE ENGINEERING"
        fromDate="2024"
        toDate="2026"
      />
      <ResumeHeading
        heading="National Open University of Nigeria"
        subHeading="MASTERS BUSINESS ADMINISTRATION"
        fromDate="2012"
        toDate="2018"
      />
      <ResumeHeading
        heading="Institute of Management and Technology"
        subHeading="HND CHEMICAL ENGINEERING"
        fromDate="2004"
        toDate="2009"
      />
    </div>,

    // 1) Work History
    <div className="resume-screen-container" key="work-history">
      <ResumeHeading
        heading="Cobel Contracting Nigeria"
        subHeading="Quality Assurance and Quality Control Officer"
        fromDate="2012"
        toDate="2016"
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Developed and standardized a global quality management system in
          line with ISO 9001:2008 standards.
        </span>
        <br />
        <span className="resume-description-text">
          - Reduced third-party rejection rates from 80% to 5% and decreased
          corrective-action costs by 40%.
        </span>
        <br />
        <span className="resume-description-text">
          - Led audits and cross-team reviews, reducing defects by 50%.
        </span>
      </div>

      <ResumeHeading
        heading="Yasnas Engineering Limited"
        subHeading="Quality Assurance and Quality Control Officer"
        fromDate="2011"
        toDate="2012"
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Managed QA oversight for 353 bearing piles and 500 secant piles for
          the EKO Guest House project.
        </span>
        <br />
        <span className="resume-description-text">
          - Designed an inspection plan that reduced project delays by 10%.
        </span>
      </div>

      <ResumeHeading
        heading="Grand Petroleum"
        subHeading="Quality Assurance and Quality Control Officer"
        fromDate="2010"
        toDate="2011"
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Built CAPA systems that eliminated substandard base oil usage and
          increased profits by 20%.
        </span>
        <br />
        <span className="resume-description-text">
          - Oversaw QA processes for lubricant blending.
        </span>
      </div>
    </div>,

    // 2) Programming Skills
    <div className="resume-screen-container" key="programming-skills">
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>

          <div className="skill-percentage">
            <div
              style={{ width: `${skill.ratingPercentage}%` }}
              className="active-percentage"
            />
          </div>
        </div>
      ))}
    </div>,

    // 3) Projects
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((project, index) => (
        <ResumeHeading
          key={index}
          heading={project.title}
          subHeading={project.subHeading}
          description={project.description}
          fromDate={project.duration.fromDate}
          toDate={project.duration.toDate}
        />
      ))}
    </div>,

    // 4) Interests
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Continuous Learning"
        description="Actively exploring new technologies, tools, and best practices in software engineering to improve code quality and problem-solving skills."
      />
      <ResumeHeading
        heading="Swimming"
        description="A regular fitness activity that helps maintain focus, discipline, and mental clarity, supporting sustained productivity in technical work."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to music to enhance concentration and creative thinking, especially during deep problem-solving and development sessions."
      />
    </div>,
  ];

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        onClick={() => handleCarousal(index)}
        key={index}
      >
        <img
          className="bullet-logo"
          src={`../../../public/Resume/${bullet.logoSrc}`}
          alt="Logos"
        />
        <div className="bullet-label">{bullet.label}</div>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        className="resume-details-carousal"
        style={carousalOffSetStyle.style}
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details" ref={detailsRef}>
            {getResumeScreen()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
