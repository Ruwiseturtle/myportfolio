import React, { useState, useRef, useEffect } from "react";
import  {useDispatch } from "react-redux";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo-code1.png";
import { ReactComponent as LanguageIcon } from "../../assets/images/globe-solid.svg";
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

const avatarMenuRef = useRef(null);

 // Закриття AvatarMenu при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        avatarMenuRef.current &&
        !avatarMenuRef.current.contains(event.target)
      ) {
        setIsAvatarMenuOpen(false);
      }
    };
    // Додаємо слухач подій
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Видаляємо слухач подій при розмонтуванні
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


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
        </div>

        {/* іконка для мультимовності */}
        <div>
          <NavLink>
            <div className="container-languageIcon">
              <LanguageIcon className="language" />
            </div>
          </NavLink>
        </div>

        {/* іконка для аватара */}
        <NavLink
          className={({ isActive }) =>
            isActive ? "box-avatar activeImage" : "box-avatar"
          }
          onClick={(event) => {
            event.preventDefault();
            setisMenuOpen(false);
            setIsAvatarMenuOpen(!isAvatarMenuOpen);
            dispatch(setAuthSwitchToShow(AuthStatus.LogIn));
          }}
        >
          <img
            className="avatar"
            src={isAvatarMenuOpen ? avatarBlue : avatarWhite} // Зміна зображення залежно від стану меню
            alt="avatar"
          />
        </NavLink>
        {/* випливаюче вікно для авторизації, логінізації та виходу */}
        <div ref={avatarMenuRef}>
          <AvatarMenu
            isAvatarMenuOpen={isAvatarMenuOpen}
            setIsAvatarMenuOpen={setIsAvatarMenuOpen}
            setisMenuOpen={setisMenuOpen}
          />
        </div>

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
