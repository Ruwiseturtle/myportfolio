import React from 'react'
import './LanguageMenu.css';
import EnIcon from "../../assets/flagsIcons/CircleFlagsEn.svg";
import UaIcon from "../../assets/flagsIcons/CircleFlagsUa.svg";
import PlIcon from "../../assets/flagsIcons/CircleFlagsPl.svg";

// https://icones.js.org/ - іконки взяті з цього сайту

const LanguageMenu = ({isLangMenuOpen, setIsLangMenuOpen, changeLanguage}) => {


  return (
    <div
      className={`container-lang-menu ${isLangMenuOpen ? "openLangMenu" : ""}`}
    >
      <div className="box-lang-menu-list">
        <div className="lang-menu-list">
          {/* англійська мова */}
          <div
            className="iconAndLangname"
            onClick={() => {
              setIsLangMenuOpen(false);
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

          {/* українська мова */}
          <div
            className="iconAndLangname"
            onClick={() => {
              setIsLangMenuOpen(false);
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

          {/* польска мова */}
          <div
            className="iconAndLangname"
            onClick={() => {
              setIsLangMenuOpen(false);
              changeLanguage("pl");
            }}
          >
            <img
              className="iconLang"
              src={PlIcon} // Зміна зображення залежно від стану меню
              alt="avatar"
            />
            <div className="langText">Polska</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageMenu
