import React, {useState} from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo-code1.png";
import avatar from "../../assets/images/avatar.png";
import AvatarMenu from "../AvatarMenu/AvatarMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);



  return (
    <>
      <header className="container-header">
        <div className="myLogo">
          {/* <img className="logo" src={logoImage} alt="logo" /> */}

          <NavLink
            className={({ isActive }) => (isActive ? "linkActive" : "")}
            to="/MenuPage"
            onClick={() => {
              setIsOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            <div className="container-logo">
              <img className="logo" src={logoImage} alt="logo" />
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/"
            onClick={() => {
              setIsOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            <p className="truncate-to-first-letter">Ruslana</p>
          </NavLink>
        </div>

        <div className={`box-links ${isOpen ? "open" : "close"}`}>
          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/AboutMe"
            onClick={() => {
              setIsOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            About me
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/MyProjects"
            onClick={() => {
              setIsOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            Projects
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/Skills"
            onClick={() => {
              setIsOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            My skills
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/Contact"
            onClick={() => {
              setIsOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            Contact
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/Sertificates"
            onClick={() => {
              setIsOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            Sertificates
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/UserPage"
            onClick={() => {
              setIsOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            Your page
          </NavLink>
        </div>

        <div
          className="box-avatar"
          onClick={() => setIsAvatarMenuOpen(!isAvatarMenuOpen)}
        >
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
        {/* випливаюче вікно для авторизації, логінізації та виходу */}
        <AvatarMenu
          isAvatarMenuOpen={isAvatarMenuOpen}
          setIsAvatarMenuOpen={setIsAvatarMenuOpen}
        />
        {/* бергер-меню */}
        <div
          className={`burger ${isOpen ? "open" : "close"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* backdrop */}
        {isOpen && (
          <div className="backdrop" onClick={() => setIsOpen(false)}></div>
        )}
      </header>
    </>
  );
};

export default Header;
