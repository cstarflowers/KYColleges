import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileCentreGalleryExpanded.module.css";

const ProfileCentreGalleryExpanded: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/profile-centre-gallery");
  }, [navigate]);

  return (
    <div className={styles.profileCentreGalleryExpan}>
      <img
        className={styles.nopathCopy36}
        alt=""
        src="/nopath--copy-36@2x.png"
      />
      <div className={styles.clickAnywhereTo}>Click anywhere to exit!</div>
      <img
        className={styles.profileCentreGalleryExpanChild}
        alt=""
        src="/line-2.svg"
      />
      <img
        className={styles.profileCentreGalleryExpanChild}
        alt=""
        src="/line-21.svg"
      />
      <div
        className={styles.profileCentreGalleryExpanInner}
        onClick={onRectangleClick}
      />
    </div>
  );
};

export default ProfileCentreGalleryExpanded;
