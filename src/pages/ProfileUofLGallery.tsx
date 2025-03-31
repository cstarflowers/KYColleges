import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileUofLGallery.module.css";

const ProfileUofLGallery: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNoPathCopyClick = useCallback(() => {
    navigate("/profile-uofl-gallery-expanded");
  }, [navigate]);

  const onEN42FAbImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.profileUoflGallery}>
      <img
        className={styles.nopathCopy22}
        alt=""
        src="/nopath--copy-22@2x.png"
        onClick={onNoPathCopyClick}
      />
      <div className={styles.profileUoflGalleryChild} />
      <div className={styles.profileUoflGalleryItem} />
      <div className={styles.profileUoflGalleryInner} />
      <div className={styles.lineDiv} />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.en42fabIcon}
        alt=""
        src="/en42fab@2x.png"
        onClick={onEN42FAbImageClick}
      />
      <div className={styles.profileUoflGalleryChild1} />
      <div className={styles.profileUoflGalleryChild2} />
      <div className={styles.profileUoflGalleryChild3} />
      <img className={styles.path1Icon} alt="" src="/path-1.svg" />
      <img
        className={styles.path41Icon}
        alt=""
        src="/path-41.svg"
        onClick={onEN42FAbImageClick}
      />
      <img className={styles.path45Icon} alt="" src="/path-45.svg" />
      <div className={styles.staffAndStudentsContainer}>
        <p className={styles.staffAndStudentsAtTheUniv}>
          <span>
            {`Staff and students at the `}
            <span className={styles.universityOfLouisville}>
              University of Louisville
            </span>
          </span>
        </p>
        <p className={styles.staffAndStudentsAtTheUniv}>
          <span>have uploaded the following</span>
          <b className={styles.b}> 6</b>
          <span className={styles.b}>{` `}</span>
          <b className={styles.b}>{`pictures/videos `}</b>
          <span className={styles.b}>of</span>
        </p>
        <p className={styles.staffAndStudentsAtTheUniv}>
          <span className={styles.b}>the university:</span>
        </p>
      </div>
      <img
        className={styles.nopathCopy23}
        alt=""
        src="/nopath--copy-23@2x.png"
      />
      <img
        className={styles.nopathCopy24}
        alt=""
        src="/nopath--copy-24@2x.png"
      />
      <img
        className={styles.nopathCopy25}
        alt=""
        src="/nopath--copy-25@2x.png"
      />
      <img
        className={styles.nopathCopy26}
        alt=""
        src="/nopath--copy-26@2x.png"
      />
      <img
        className={styles.nopathCopy27}
        alt=""
        src="/nopath--copy-27@2x.png"
      />
      <div className={styles.profileUoflGalleryChild4} />
      <div className={styles.profileUoflGalleryChild5} />
      <b className={styles.page11}>Page 1/1</b>
      <img className={styles.path39Icon} alt="" src="/path-39.svg" />
      <img
        className={styles.nopathCopy20}
        alt=""
        src="/nopath--copy-20@2x.png"
      />
      <div className={styles.nopathCopy19} />
      <div className={styles.universityOfLouisville1}>
        University of Louisville
      </div>
      <div className={styles.match81}>74% Match | 81% Acceptance</div>
    </div>
  );
};

export default ProfileUofLGallery;
