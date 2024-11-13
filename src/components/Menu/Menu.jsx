import React from 'react';
import styles from './Menu.module.css';
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.containerMenu}>
      <ul>
        <li>
          <NavLink
            to="DescriptionMenu"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <p> Description</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Authorization"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <p> Authorization</p>
          </NavLink>
        </li>
        <li>
          <p>....</p>
        </li>
        <li>
          <p>....</p>
        </li>
        <li>
          <p>....</p>
        </li>
      </ul>
    </div>
  );
}

export default Menu
