import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileCentreGallery.module.css";

const ProfileCentreGallery: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNoPathCopyClick = useCallback(() => {
    navigate("/profile-centre-gallery-expanded");
  }, [navigate]);

  const onEN42FAbImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.profileCentreGallery}>
      <img
        className={styles.nopathCopy30}
        alt=""
        src="/nopath--copy-30@2x.png"
        onClick={onNoPathCopyClick}
      />
      <div className={styles.profileCentreGalleryChild} />
      <div className={styles.profileCentreGalleryItem} />
      <div className={styles.profileCentreGalleryInner} />
      <div className={styles.lineDiv} />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.en42fabIcon}
        alt=""
        src="/en42fab@2x.png"
        onClick={onEN42FAbImageClick}
      />
      <div className={styles.profileCentreGalleryChild1} />
      <div className={styles.profileCentreGalleryChild2} />
      <div className={styles.profileCentreGalleryChild3} />
      <img className={styles.path1Icon} alt="" src="/path-1.svg" />
      <img
        className={styles.path41Icon}
        alt=""
        src="/path-41.svg"
        onClick={onEN42FAbImageClick}
      />
      <img className={styles.path45Icon} alt="" src="/path-45.svg" />
      <div className={styles.staffAndStudentsContainer}>
        <p className={styles.staffAndStudentsAtCentreC}>
          <span>
            {`Staff and students at `}
            <span className={styles.centreCollege}>Centre College</span>
          </span>
        </p>
        <p className={styles.staffAndStudentsAtCentreC}>
          <span>{`have uploaded the following `}</span>
          <b className={styles.picturesvideos}>{`6 pictures/videos `}</b>
          <span className={styles.picturesvideos}>of</span>
        </p>
        <p className={styles.staffAndStudentsAtCentreC}>
          <span className={styles.picturesvideos}>the university:</span>
        </p>
      </div>
      <img
        className={styles.nopathCopy31}
        alt=""
        src="/nopath--copy-31@2x.png"
      />
      <img
        className={styles.nopathCopy32}
        alt=""
        src="/nopath--copy-32@2x.png"
      />
      <img
        className={styles.nopathCopy33}
        alt=""
        src="/nopath--copy-33@2x.png"
      />
      <img
        className={styles.nopathCopy34}
        alt=""
        src="/nopath--copy-34@2x.png"
      />
      <img
        className={styles.nopathCopy35}
        alt=""
        src="/nopath--copy-35@2x.png"
      />
      <div className={styles.profileCentreGalleryChild4} />
      <div className={styles.profileCentreGalleryChild5} />
      <b className={styles.page11}>Page 1/1</b>
      <img className={styles.path39Icon} alt="" src="/path-39.svg" />
      <img
        className={styles.nopathCopy29}
        alt=""
        src="/nopath--copy-29@2x.png"
      />
      <div className={styles.profileCentreGalleryChild6} />
      <div className={styles.centreCollege1}>Centre College</div>
      <div className={styles.match628}>100% Match | 62.8% Acceptance</div>
    </div>
  );
};

export default ProfileCentreGallery;
