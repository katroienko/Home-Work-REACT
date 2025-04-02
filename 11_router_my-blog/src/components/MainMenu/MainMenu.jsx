import { NavLink } from "react-router-dom";

import styles from "./MainMenu.module.css";

const MainMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink className={styles.link} to="/">
          Home page
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/posts">
          Posts page
        </NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
