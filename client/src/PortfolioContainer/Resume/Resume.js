import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Resume.css";
// import index from "react-typical";
// imr animations
// imr scroll serveces

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>

        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Tech Stack", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    {
      skill: "HTML",
      ratingPercentage: 70,
    },
    {
      skill: "CSS",
      ratingPercentage: 65,
    },
    {
      skill: "Bootstrap",
      ratingPercentage: 70,
    },
    {
      skill: "SASS",
      ratingPercentage: 60,
    },
    {
      skill: "JavaScript",
      ratingPercentage: 60,
    },
    {
      skill: "React JS",
      ratingPercentage: 60,
    },
    // {
    //   skill: "Mongo DB",
    //   ratingPercentage: 85,
    // },
    {
      skill: "Express JS",
      ratingPercentage: 40,
    },
    {
      skill: "Node JS",
      ratingPercentage: 40,
    },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "A personal Portfolio Website to showcase all my details in one place.",
      subHeading: "Technologies Used: HTML, CSS, Javacript, React js",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Savitribai Phule Pune University"}
        subHeading={"B.E. in ELECTRONICS & TELECOMMUNICATIONS"}
        fromDate={"2021"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Maharashtra State Board of technical Education"}
        subHeading={"Diploma in INFORMATION TECHNOLOGY"}
        fromDate={"2016"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Maharashtra S.S.C."}
        subHeading={"Naharashtra High School"}
        fromDate={"2011"}
        toDate={"2016"}
      />
    </div>,

    <div className="resume-screen-container" key="work-exprerience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Primal Infosys, Pune"}
          subHeading={"Front End Developer"}
          fromDate={"2022"}
          toDate={"2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - I actively contributed to building responsive and visually
            appealing websites. I applied my knowledge of HTML, CSS, and
            JavaScript to create user-friendly interfaces.
          </span>
        </div>

        <div className="experience-description">
          <span className="resume-description-text">
            - I worked closely with a talented team of developers and designers,
            collaborating to turn design concepts into functional web
            applications.
          </span>
          <br />
          <span className="resume-description-text">
            - I developed strong problem-solving skills by troubleshooting and
            resolving front-end issues, ensuring seamless user experiences
            across different devices and browsers.
          </span>
          <br />
          <span className="resume-description-text">
            -This experience strengthened my ability to work in a team-oriented
            environment.
          </span>
          <br />
        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          formDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Mobile App Development"
        description="Apart from being tech enthusiast and code writer, i am interested in Mobile App Development"
      />
      <ResumeHeading
        heading="Sports"
        description="Passionate about football with a keen interest in team dynamics and sportsmanship."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: {
        transform: "translateY(" + index * offsetHeight * -1 + "px)",
      },
    };

    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops,,,no internet connection "
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading="My Formal Bio Details" />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
