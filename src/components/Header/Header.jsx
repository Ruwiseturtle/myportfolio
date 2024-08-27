import React, {useState} from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo-code1.png";

const Header = () => { 
  const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <>
      <header className="container-header">
        <div className="myLogo">
          <img className="logo" src={logoImage} alt="logo" />
          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/"
            onClick={closeMenu}
          >
            Ruslana
          </NavLink>
        </div>

        <div className={`box-links ${isOpen ? "open" : ""}`}>
          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/AboutMe"
            onClick={closeMenu}
          >
            About me
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/MyProjects"
            onClick={closeMenu}
          >
            Projects
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/Skills"
            onClick={closeMenu}
          >
            My skills
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/Contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/Sertificates"
            onClick={closeMenu}
          >
            Sertificates
          </NavLink>
        </div>

        {/* бергер-меню */}
        <div className="burger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* backdrop */}
        {isOpen && <div className="backdrop" onClick={closeMenu}></div>}
      </header>
    </>
  );
};

export default Header;
