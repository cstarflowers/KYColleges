import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MenuFinishButton.module.css";

export type MenuFinishButtonType = {
  className?: string;
};

const MenuFinishButton: FunctionComponent<MenuFinishButtonType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onPath23IconClick = useCallback(() => {
    navigate("/opening-survey-favorites");
  }, [navigate]);

  const onPathClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.menuFinishButton, className].join(" ")}>
      <img
        className={styles.path23Icon}
        alt=""
        src="/path-231.svg"
        onClick={onPath23IconClick}
      />
      <img
        className={styles.path17Icon}
        alt=""
        src="/path-17.svg"
        onClick={onPathClick}
      />
      <b className={styles.continue}>Continue</b>
      <img className={styles.path25Icon} alt="" src="/path-25.svg" />
      <img className={styles.path28Icon} alt="" src="/path-17.svg" />
      <b className={styles.continue}>Continue</b>
      <img className={styles.path25Icon} alt="" src="/path-25.svg" />
      <img className={styles.path28Icon} alt="" src="/path-17.svg" />
      <b className={styles.continue}>Continue</b>
      <img className={styles.path25Icon} alt="" src="/path-25.svg" />
      <img className={styles.path28Icon} alt="" src="/path-17.svg" />
      <b className={styles.finish}>Finish!</b>
      <img className={styles.path25Icon} alt="" src="/path-25.svg" />
      <div
        className={styles.menuFinishButtonChild}
        onClick={onPath23IconClick}
      />
    </div>
  );
};

export default MenuFinishButton;
