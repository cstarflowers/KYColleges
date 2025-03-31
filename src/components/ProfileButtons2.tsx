import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileButtons2.module.css";

export type ProfileButtons2Type = {
  className?: string;
};

const ProfileButtons2: FunctionComponent<ProfileButtons2Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/profile-uofl-match");
  }, [navigate]);

  return (
    <div className={[styles.profileButtons2, className].join(" ")}>
      <div className={styles.profileButtons2Child} />
      <div className={styles.saved}> Saved!</div>
      <img className={styles.path20Icon} alt="" src="/path-20.svg" />
      <img className={styles.path23Icon} alt="" src="/path-23.svg" />
      <img className={styles.path41Icon} alt="" src="/path-41.svg" />
      <img className={styles.en42fabIcon} alt="" src="/en42fab@2x.png" />
      <div className={styles.profileButtons2Child} />
      <div className={styles.saveToMy}>Save to My List</div>
      <img className={styles.path20Icon} alt="" src="/path-20.svg" />
      <div className={styles.profileButtons2Inner} />
      <div className={styles.viewPhotos}> View Photos</div>
      <img className={styles.path47Icon} alt="" src="/path-47.svg" />
      <div className={styles.rectangleDiv} onClick={onRectangleClick} />
      <div className={styles.switchView}> Switch View</div>
      <img className={styles.path49Icon} alt="" src="/path-49.svg" />
    </div>
  );
};

export default ProfileButtons2;
