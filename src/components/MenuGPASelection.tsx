import { FunctionComponent } from "react";
import styles from "./MenuGPASelection.module.css";

export type MenuGPASelectionType = {
  className?: string;
};

const MenuGPASelection: FunctionComponent<MenuGPASelectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.menuGpaSelection, className].join(" ")}>
      <div className={styles.menuGpaSelectionChild} />
      <img className={styles.path36Icon} alt="" src="/path-36.svg" />
      <div className={styles.div}>3.8-4.0</div>
      <div className={styles.div1}>3.6-3.8</div>
      <div className={styles.div2}>3.4-3.6</div>
      <div className={styles.div3}>3.2-3.4</div>
      <div className={styles.div4}>3.0-3.2</div>
      <div className={styles.div5}>2.8-3.0</div>
      <div className={styles.div6}>2.6-2.8</div>
    </div>
  );
};

export default MenuGPASelection;
