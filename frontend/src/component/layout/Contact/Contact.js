import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:rishabhjain08062000@gmail.com">
        <Button>Contact: rishabhjain08062000.com</Button>
      </a>
    </div>
  );
};

export default Contact;
