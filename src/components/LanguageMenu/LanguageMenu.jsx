import React from 'react'
import './LanguageMenu.css';

const LanguageMenu = ({isLangMenuOpen, setIsLangMenuOpen, changeLanguage}) => {


  return (
    <div className={`lang-menu ${isLangMenuOpen ? "openLangMenu" : ""}`}>
      <div className="lang-menu-list">
        <div
          onClick={() => {
            setIsLangMenuOpen(false);
            console.log("=======setIsLangMenuOpen===========");
            console.log(isLangMenuOpen);
            changeLanguage("en");            
          }}
        >
          <p>English</p>
        </div>
        <div
          onClick={() => {
            setIsLangMenuOpen(false);
             console.log("=======setIsLangMenuOpen===========");
             console.log(isLangMenuOpen);
            changeLanguage("ua");
            
          }}
        >
          Українська
        </div>
      </div>
    </div>
  );
};

export default LanguageMenu
