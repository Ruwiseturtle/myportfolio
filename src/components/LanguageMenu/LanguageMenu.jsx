import React from 'react'
import './LanguageMenu.css';
import EnIcon from "../../assets/flagsIcons/CircleFlagsEn.svg";
import UaIcon from "../../assets/flagsIcons/CircleFlagsUa.svg";

// https://icones.js.org/ - іконки взяті з цього сайту

const LanguageMenu = ({isLangMenuOpen, setIsLangMenuOpen, changeLanguage}) => {


  return (
    <div className={`container-lang-menu ${isLangMenuOpen ? "openLangMenu" : ""}`}>
      <div className='box-lang-menu-list'>
        <div className="lang-menu-list">
          <div
            className="iconAndLangname"
            onClick={() => {
              setIsLangMenuOpen(false);
              console.log("=======setIsLangMenuOpen===========");
              console.log(isLangMenuOpen);
              changeLanguage("en");
            }}
          >
            <img
              className="iconLang"
              src={EnIcon} // Зміна зображення залежно від стану меню
              alt="avatar"
            />
            <div className="langText">English</div>
          </div>
          <div
            className="iconAndLangname"
            onClick={() => {
              setIsLangMenuOpen(false);
              console.log("=======setIsLangMenuOpen===========");
              console.log(isLangMenuOpen);
              changeLanguage("ua");
            }}
          >
            <img
              className="iconLang"
              src={UaIcon} // Зміна зображення залежно від стану меню
              alt="avatar"
            />
            <div className="langText">Українська</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageMenu
