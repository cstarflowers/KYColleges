import { FunctionComponent } from "react";
import styles from "./MenuMajorSelection.module.css";

export type MenuMajorSelectionType = {
  className?: string;
};

const MenuMajorSelection: FunctionComponent<MenuMajorSelectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.menuMajorSelection, className].join(" ")}>
      <div className={styles.menuMajorSelectionChild} />
      <img className={styles.path38Icon} alt="" src="/path-36.svg" />
      <div className={styles.computerScience}>Computer Science</div>
      <div className={styles.mathematics}>Mathematics</div>
      <div className={styles.linguistics}>Linguistics</div>
      <div className={styles.digitalArt}>Digital Art</div>
      <div className={styles.musicTheory}>Music Theory</div>
    </div>
  );
};

export default MenuMajorSelection;
