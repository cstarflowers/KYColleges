import { FunctionComponent } from "react";
import styles from "./StartupScreenTransition.module.css";

const StartupScreenTransition: FunctionComponent = () => {
  return (
    <div className={styles.startupScreenTransition}>
      <div className={styles.startupScreenTransitionChild} />
      <div className={styles.startupScreenTransitionItem} />
    </div>
  );
};

export default StartupScreenTransition;
