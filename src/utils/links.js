import React from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const links = [
  {
    url: "/",
    text: "Home",
    icon: <AiFillHome className="nav-icon" />,
  },
  {
    url: "/list",
    text: "API Drinks",
    icon: <RiTeamFill className="nav-icon" />,
  },
  {
    url: "/curriculum",
    text: "curriculum",
    icon: <AiFillMessage className="nav-icon" />,
  },
];

const LinkComponent = ({ classLink }) => {
  const { closeSidebar } = useGlobalContext();

  return (
    <ul className={classLink}>
      {links.map((link) => {
        return (
          <Link
            key={link.text}
            to={link.url}
            className="nav-item"
            onClick={closeSidebar}
          >
            <div className="nav-link">
              {link.icon}
              <h5 className="nav-text">{link.text}</h5>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

const socialLink = [
  {
    url: "https://www.linkedin.com/in/elisaresmini/",
    icon: <FaLinkedin className="nav-icon" />,
  },
];

const SocialComponent = ({ classSocial }) => {
  return (
    <ul className={classSocial}>
      {socialLink.map((link) => {
        return (
          <li key={link.url} className="nav-item">
            <a href={link.url} alt={link.url} className="nav-link">
              {link.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { LinkComponent, SocialComponent };
