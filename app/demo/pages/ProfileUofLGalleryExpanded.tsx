import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileUofLGalleryExpanded.module.css";

const ProfileUofLGalleryExpanded: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/profile-uofl-gallery");
  }, [navigate]);

  return (
    <div className={styles.profileUoflGalleryExpande}>
      <img
        className={styles.nopathCopy28}
        alt=""
        src="/nopath--copy-28@2x.png"
      />
      <div className={styles.clickAnywhereTo}>Click anywhere to exit!</div>
      <img
        className={styles.profileUoflGalleryExpandeChild}
        alt=""
        src="/line-2.svg"
      />
      <img
        className={styles.profileUoflGalleryExpandeChild}
        alt=""
        src="/line-21.svg"
      />
      <div
        className={styles.profileUoflGalleryExpandeInner}
        onClick={onRectangleClick}
      />
    </div>
  );
};

export default ProfileUofLGalleryExpanded;
