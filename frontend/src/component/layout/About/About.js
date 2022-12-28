import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
const About = () => {
 
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/daxymefcd/image/upload/v1672187732/products/bvoply70irg1pmfcqfgy.jpg"
              alt="Founder"
            />
            <Typography>RISHABH JAIN</Typography>
           
            <span>
              This is a sample wesbite made by @RISHABH JAIN. Only 
              FOR PRACTICING AND LEARNING TECH
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
