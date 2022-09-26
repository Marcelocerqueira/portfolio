import React from "react";
import { IconZap } from "./styles";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <IconZap>
      <a
        target="_blanck"
        href="https://www.linkedin.com/in/marcelo-cerqueira-0a0b42178/"
        style={{ backgroundColor: "#0D1117" }}
      >
        <FiLinkedin size={25} style={{ color: "#fff" }} />
      </a>
      <a
        target="_blanck"
        href="https://github.com/Marcelocerqueira"
        style={{ backgroundColor: "#0D1117" }}
      >
        <FiGithub
          size={25}
          style={{ color: "#fff", backgroundColor: "#0D1117" }}
        />
      </a>

      <a
        target="_blanck"
        style={{ backgroundColor: "#0D1117" }}
        href="https://api.whatsapp.com/send?phone=5571993177865&text=Ol%C3%A1%20meu%20nome%20%C3%A9"
      >
        <FaWhatsapp size={25} style={{ color: "#fff" }} />
      </a>
      <a
        target="_blanck"
        href="https://twitter.com/"
        style={{ backgroundColor: "#0D1117" }}
      >
        <FiTwitter
          size={25}
          style={{ color: "#fff", backgroundColor: "#0D1117" }}
        />
      </a>
    </IconZap>
  );
};

export default Contact;
