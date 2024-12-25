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
  const [isMenuOpen, setisMenuOpen] = useState(false);
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
              setisMenuOpen(false);
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
              setisMenuOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            <p className="truncate-to-first-letter">Ruslana</p>
          </NavLink>
        </div>

        <div className={`box-links ${isMenuOpen ? "open" : "close"}`}>
          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/AboutMe"
            onClick={() => {
              setisMenuOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            About me
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/MyProjects"
            onClick={() => {
              setisMenuOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            Projects
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/Skills"
            onClick={() => {
              setisMenuOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            My skills
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/Contact"
            onClick={() => {
              setisMenuOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            Contact
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/Sertificates"
            onClick={() => {
              setisMenuOpen(false);
              setIsAvatarMenuOpen(false);
            }}
          >
            Sertificates
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text active" : "text")}
            to="/UserPage"
            onClick={() => {
              setisMenuOpen(false);
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
            setisMenuOpen(false);
            setIsAvatarMenuOpen(!isAvatarMenuOpen);
            dispatch(setAuthSwitchToShow(AuthStatus.LogIn));
          }}
        >
          {/* Оновлення логіки src для аватара */}
          {({ isActive }) => (
            <img
              className="avatar"
              src={isActive ? avatarBlue : avatarWhite} // Використовуємо isActive для зміни зображення
              alt="avatar"
            />
          )}
        </NavLink>
        {/* випливаюче вікно для авторизації, логінізації та виходу */}
        <AvatarMenu
          isAvatarMenuOpen={isAvatarMenuOpen}
          setIsAvatarMenuOpen={setIsAvatarMenuOpen}
          setisMenuOpen={setisMenuOpen}
        />
        {/* бергер-меню */}
        <div
          className={`burger ${isMenuOpen ? "open" : "close"}`}
          onClick={() => {
            setisMenuOpen(!isMenuOpen);
            setIsAvatarMenuOpen(false);
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* backdrop */}
        {isMenuOpen && (
          <div className="backdrop" onClick={() => setisMenuOpen(false)}></div>
        )}
      </header>
    </>
  );
};

export default Header;
