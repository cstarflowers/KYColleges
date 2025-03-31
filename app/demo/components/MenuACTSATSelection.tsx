import { FunctionComponent } from "react";
import styles from "./MenuACTSATSelection.module.css";

export type MenuACTSATSelectionType = {
  className?: string;
};

const MenuACTSATSelection: FunctionComponent<MenuACTSATSelectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.menuActsatSelection, className].join(" ")}>
      <div className={styles.menuActsatSelectionChild} />
      <div className={styles.div}>34/1500</div>
      <div className={styles.div1}>35/1540</div>
      <div className={styles.div2}>36/1590</div>
      <div className={styles.div3}>33/1460</div>
      <div className={styles.div4}>32/1430</div>
      <div className={styles.div5}>31/1400</div>
      <div className={styles.div6}>30/1370</div>
      <img className={styles.path35Icon} alt="" src="/path-36.svg" />
    </div>
  );
};

export default MenuACTSATSelection;
