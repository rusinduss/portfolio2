import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";

import HoverLinks from "./HoverLinks";

import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/rusinduvithanage" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/rusindu-vithanage-06589631b"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com/rusindu_2003" target="_blank">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/rusindu_vithanage" target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="https://www.rusinduv.me/assets/CV_rusindu-BuqOoCLy.pdf"
        target="_blank"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
