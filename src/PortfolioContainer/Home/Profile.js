import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-info">
          <div className="coolz">
            <div className="coolz-icon">
              <a href="https://www.facebook.com/matias.ahrensdorf.1">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://github.com/Titoxox97">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.instagram.com/mahrens3/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/matias-ahrensdorf-5353b4152">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-info-name">
            <span className="primary-text">
              {" "}
              Hello, I am <span className="highlighted-text">Matias</span>
            </span>
          </div>
          <div className="profile-info-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🤓",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 🔋",
                    1000,
                    "Cross Platform Dev 🖲",
                    1000,
                    "React/React Native Dev 💿",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tag">
                Aspiring developer with front-end and back-end experience.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="Resume2022.pdf" download="Resume2022.pdf">
              <button className="btn highlight-btn">See Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-pic">
          <div className="profile-pic-background"></div>
        </div>
      </div>
    </div>
  );
}
