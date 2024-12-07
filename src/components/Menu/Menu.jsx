import React from "react";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  };

  return (
    <div className={`${styles.containerMenu} ${!menuOpen ? styles.close : ""}`}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <NavLink
            to="DescriptionMenu"
            className={({ isActive }) =>
              isActive ? `${styles.nameHref} ${styles.active}` : styles.nameHref
            }
            onClick={handleClick}
          >
            Description
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to="Authorization"
            className={({ isActive }) =>
              isActive ? `${styles.nameHref} ${styles.active}` : styles.nameHref
            }
            onClick={handleClick}
          >
            Authorization
          </NavLink>
        </li>
        <li className={styles.menuItem}>....</li>
        <li className={styles.menuItem}>....</li>
        <li className={styles.menuItem}>....</li>
      </ul>
    </div>
  );
};

export default Menu;
