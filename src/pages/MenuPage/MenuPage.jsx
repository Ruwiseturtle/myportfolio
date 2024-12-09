import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import style from "./MenuPage.module.css";
import Menu from "../../components/Menu/Menu";
import BurgerForMenuPage from "../../components/BurgerForMenuPage/BurgerForMenuPage";

const MenuPage = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className={style.containerMenuPage}>
      <div className={`${style.containerForPicture} ${!menuOpen ? style.containerForPictureClose : "" }`}></div>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <BurgerForMenuPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={`${style.content} ${!menuOpen ? style.contentOpen : ""}`}>
        <Outlet /> {/* Додаємо Outlet для відображення дочірніх маршрутів */}
      </div>
    </div>
  );
};

export default MenuPage;
