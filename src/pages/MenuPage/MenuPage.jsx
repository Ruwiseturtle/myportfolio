import React, { useState } from "react";
import style from "./MenuPage.module.css";
import Menu from "../../components/Menu/Menu";
import { Routes, Route, Navigate } from "react-router-dom";
import Authorization from "../../components/Authorization/Authorization";
import DescriptionMenu from "../../components/DescriptionMenu/DescriptionMenu";
import BurgerForMenuPage from "../../components/BurgerForMenuPage/BurgerForMenuPage";

const MenuPage = () => {
  const [menuOpen, setMenuOpen] = useState(true);


  return (
    <div className={style.containerMenuPage}>
      <div
        className={`${style.containerForPicture} ${!menuOpen ? style.containerForPictureClose : ""}`}
      ></div>
      <Menu menuOpen={menuOpen} setMenuOpen={ setMenuOpen} />
      <BurgerForMenuPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className={`${style.content} ${!menuOpen? style.contentOpen: ""}`}>
        {/* Замість абсолютних шляхів, використовуйте відносні */}
        <Routes>
          <Route path="/" element={<Navigate to="DescriptionMenu" replace />} />
          <Route path="DescriptionMenu" element={<DescriptionMenu />} />
          <Route path="Authorization" element={<Authorization />} />
        </Routes>
      </div>
    </div>
  );
};

export default MenuPage;
