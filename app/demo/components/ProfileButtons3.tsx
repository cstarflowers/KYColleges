import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileButtons3.module.css";

export type ProfileButtons3Type = {
  className?: string;
};

const ProfileButtons3: FunctionComponent<ProfileButtons3Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/profile-centre-gallery");
  }, [navigate]);

  const onPathClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.profileButtons3, className].join(" ")}>
      <div className={styles.profileButtons3Child} />
      <div className={styles.saved}> Saved!</div>
      <img className={styles.path20Icon} alt="" src="/path-20.svg" />
      <img className={styles.path23Icon} alt="" src="/path-23.svg" />
      <div className={styles.profileButtons3Item} onClick={onRectangleClick} />
      <div className={styles.viewPhotos}> View Photos</div>
      <img className={styles.path47Icon} alt="" src="/path-47.svg" />
      <img
        className={styles.path41Icon}
        alt=""
        src="/path-41.svg"
        onClick={onPathClick}
      />
      <img
        className={styles.en42fabIcon}
        alt=""
        src="/en42fab@2x.png"
        onClick={onPathClick}
      />
    </div>
  );
};

export default ProfileButtons3;
