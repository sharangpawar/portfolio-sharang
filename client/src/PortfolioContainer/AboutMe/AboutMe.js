import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import scroll service
// import animatons
import "./AboutMe.css";

const AboutMe = (props) => {
  const SCREEN_CONSTANTS = {
    description:
      "A detail-oriented web developer with a passion for clean code and problem-solving, committed to creating exceptional online experiences through a combination of creativity and technical proficiency.",
    highlights: {
      bullets: [
        "Full Stack Web Development",
        "Interactive FrontEnd As per Design",
        "React Js",
        "Wordpress",
        "Corel Draw & Photoshop",
      ],
      heading: "Here are few highlights : ",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container">
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me"} />

        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>

            <div className="about-me-options">
              <button className="btn primary-btn"> Hire Me </button>

              <a
                href="Sharangdhar-Pawar-Resume.pdf"
                download="Sharangdhar-Pawar-Resume.pdf"
              >
                <button className="btn highlighted-btn">Get resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
