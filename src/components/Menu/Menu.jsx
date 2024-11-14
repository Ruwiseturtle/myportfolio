import React from 'react';
import styles from './Menu.module.css';
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.containerMenu}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <NavLink
            to="DescriptionMenu"
            className={({ isActive }) =>
              isActive ? `${styles.nameHref} ${styles.active}` : styles.nameHref
            }
          >
            <p> Description</p>
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to="Authorization"
            className={({ isActive }) =>
              isActive ? `${styles.nameHref} ${styles.active}` : styles.nameHref
            }
          >
            <p> Authorization</p>
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <p>....</p>
        </li>
        <li className={styles.menuItem}>
          <p>....</p>
        </li>
        <li className={styles.menuItem}>
          <p>....</p>
        </li>
      </ul>
    </div>
  );
}

export default Menu
