import React from "react";
import style from "./MenuPage.module.css";
import Menu from "../../components/Menu/Menu";
import { Routes, Route, Navigate } from "react-router-dom";
import Authorization from "../../components/Authorization/Authorization";
import DescriptionMenu from "../../components/DescriptionMenu/DescriptionMenu";

const MenuPage = () => {
  return (
    <div className={style.containerMenuPage}>
      {/* Меню залишатиметься постійним */}
      <Menu />

      <div className={style.content}>
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
