import { FunctionComponent } from "react";
import styles from "./StartupScreen.module.css";

const StartupScreen: FunctionComponent = () => {
  return (
    <div className={styles.startupScreen}>
      <img className={styles.en42fabIcon} alt="" src="/en42fab1@2x.png" />
    </div>
  );
};

export default StartupScreen;
