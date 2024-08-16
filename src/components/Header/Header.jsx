import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => { 

  return (
    <>
      <header className="container-header">
        <div className="myLogo">
          <NavLink className="text" to="/">
            Ruslana
          </NavLink>
        </div>

        <div className="box-links">
          <NavLink className="text" to="/AboutMe">
            About me
          </NavLink>

          <NavLink className="text" to="/projects">
            Projects
          </NavLink>

          <NavLink className="text" to="/Skills">
            My skills
          </NavLink>

          <NavLink className="text" to="/Contacts">
            Contacts
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
