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
            to="/MenuPage/DescriptionMenu"
            className={({ isActive }) =>
              isActive
                ? `${styles.nameHref} ${styles.activeMenu}`
                : styles.nameHref
            }
            onClick={handleClick}
          >
            Description
          </NavLink>
        </li>

        <li className={styles.menuItem}>
          <NavLink
            to="/MenuPage/Multilingual"
            className={({ isActive }) =>
              isActive
                ? `${styles.nameHref} ${styles.activeMenu}`
                : styles.nameHref
            }
            onClick={handleClick}
          >
            Multilingual
          </NavLink>
        </li>
        <li className={styles.menuItem}>....</li>
        <li className={styles.menuItem}>....</li>
      </ul>
    </div>
  );
};

export default Menu;
