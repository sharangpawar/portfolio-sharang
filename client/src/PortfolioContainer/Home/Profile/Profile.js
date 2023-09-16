import React from "react";
// import Typical from "react-typical";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Profile.css";
// import sharangProfile from "../../../assets/Home/sharang-profile";
const Profile = () => {
  const [typeEffect] = useTypewriter({
    words: ["MERN Stack Dev", "Wordpress Dev", "Graphic Designer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/sharangdhar-pawar/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.facebook.com/people/Sharangdhar-Pawar/pfbid0uh2ctoPxVoqCgL6ZgBLTtYzVzND6Jv61sn2bo11xQRC6msrB9HaAnoWU2SCbiFd9l/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://instagram.com/sharangpawar11?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/sharangpawar">
                <i className="fa fa-github-square"></i>
              </a>
              {/* <a href="#">
                <i className="fa fa-twitter"></i>
              </a> */}
              {/* <a href="#">
              <i className="bi bi-0-circle-fill"></i>
            </a> 
            bootstrap icons*/}
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I am{" "}
              <span className="highlighted-text"> Sharangdhar Pawar.</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h2>
                {""}
                {/* MERN Stack Developer */}I am a{" "}
                <span style={{ fontWeight: "bold" }}>{typeEffect}</span>
              </h2>
              <span className="profile-role-tagline">
                passion for creating dynamic and engaging online experiences.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              // onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>

            <a
              href="Sharangdhar-Pawar-Resume.pdf"
              download="Sharangdhar-Pawar-Resume"
            >
              <button className="btn highlighted-btn">Get resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
