import styles from "./BurgerForMenuPage.module.css";
import MenuOpen from "../../assets/images/menuOpen.png";
import MenuClose from "../../assets/images/menuClose.png";

const BurgerForMenuPage = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={styles.containerBurger}
      onClick={() => setMenuOpen((prev) => !prev)}
    >
      <img
        className={styles.menuImage}
        src={menuOpen ? MenuOpen : MenuClose}
        alt="logo"
      />
    </div>
  );
};

export default BurgerForMenuPage;
