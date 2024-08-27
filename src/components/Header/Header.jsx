import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo-code1.png";

const Header = () => { 

  return (
    <>
      <header className="container-header">
        <div className="myLogo">
          <img className="logo" src={logoImage} alt="logo" />
          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/"
          >
            Ruslana
          </NavLink>
        </div>

        <div className="box-links">
          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/AboutMe"
          >
            About me
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/MyProjects"
          >
            Projects
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/Skills"
          >
            My skills
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/Contact"
          >
            Contact
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/Sertificates"
          >
            Sertificates
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
