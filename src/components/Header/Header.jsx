import React, { useState } from "react";
import  {useDispatch } from "react-redux";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo-code1.png";
// import avatar from "../../assets/images/avatar.png";
import avatarWhite from "../../assets/images/avatarSVGwhite.svg";
import avatarBlue from "../../assets/images/avatarSVGblue.svg";
import AvatarMenu from "../AvatarMenu/AvatarMenu";
import { setAuthSwitchToShow } from "../../redux/auth/authReducer";
import AuthStatus from "../../constants/userRolesEnum";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  // const navigate = useNavigate();

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

        <NavLink
          to="/AuthorizationPage"
          className={({ isActive }) =>
            isActive ? "box-avatar activeImage" : "box-avatar"
          }
          onClick={() => {
            setIsAvatarMenuOpen(!isAvatarMenuOpen);
            dispatch(setAuthSwitchToShow(AuthStatus.LogIn));
          }}
        >
          {/* Оновлення логіки src для аватара */}
          {({ isActive }) => (
            <img className="avatar"
              src={isActive ? avatarBlue : avatarWhite} // Використовуємо isActive для зміни зображення
              alt="avatar"
            />
          )}
        </NavLink>
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
