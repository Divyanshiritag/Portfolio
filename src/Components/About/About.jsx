import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a passionate and enthusiastic front-end developer with a knack
              for creating engaging and user-friendly web interfaces.I have a
              strong foundation in HTML, CSS, and JavaScript, along with modern
              frameworks like React .
            </p>
            <p>
              I am enthusiastic about building engaging, user-friendly web
              applications and continuously learning new technologies to enhance
              my skill set.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
