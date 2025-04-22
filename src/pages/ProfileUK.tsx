import { FunctionComponent, useState, useCallback } from "react";
import ProfileButtons3 from "../components/ProfileButtons3";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileUK.module.css";

const ProfileUK: FunctionComponent = () => {
  const [isProfileButtons3Open, setProfileButtons3Open] = useState(false);
  const navigate = useNavigate();

  const openProfileButtons3 = useCallback(() => {
    setProfileButtons3Open(true);
  }, []);

  const closeProfileButtons3 = useCallback(() => {
    setProfileButtons3Open(false);
  }, []);

  const onEN42FAbImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/profile-centre-gallery");
  }, [navigate]);

  return (
    <>
      <div className={styles.profileUk}>
        <div className={styles.profileUkChild} />
        <div className={styles.profileUkItem} />
        <div className={styles.profileUkInner} />
        <div className={styles.lineDiv} />
        <img
          className={styles.nopathCopy37}
          alt=""
          src="/nopath--copy-37@2x.png"
        />
        <div className={styles.rectangleDiv} />
        <div className={styles.profileUkChild1} />
        <div className={styles.profileUkChild2} />
        <div className={styles.profileUkChild3} />
        <img className={styles.path1Icon} alt="" src="/path-1.svg" />
        <div className={styles.profileUkChild4} />
        <img
          className={styles.en42fabIcon}
          alt=""
          src="/en42fab@2x.png"
          onClick={onEN42FAbImageClick}
        />
        <div className={styles.universityOfKentucky}>
          University of Kentucky
        </div>
        <img
          className={styles.path41Icon}
          alt=""
          src="/path-41.svg"
          onClick={onEN42FAbImageClick}
        />
        <img className={styles.path45Icon} alt="" src="/path-45.svg" />
        <div className={styles.match92}>63% Match | 92% Acceptance</div>
        <div className={styles.basedOnYourContainer}>
          {`Based on your current profile, we believe that the `}
          <span className={styles.universityOfKentucky1}>
            University of Kentucky
          </span>{" "}
          would be a great fit for you!
        </div>
        <div className={styles.urbanCampusLexingtonContainer}>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.span}>{`● `}</span>
            </span>
            <span>
              <b className={styles.urbanCampus}>{`Urban Campus `}</b>
              <span>(Lexington; 320k citizens)</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.span}>●</span>
            </span>
            <span>
              <span>{` `}</span>
              <b className={styles.urbanCampus}>{`High Enrollment `}</b>
              <span
                className={styles.urbanCampus}
              >{`(23,930 Undergraduates) `}</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <b className={styles.urbanCampus}>
              <span className={styles.span}>{`● `}</span>
            </b>
            <span>
              <b className={styles.urbanCampus}>Average Academics</b>
              <span> (24 ACT, 3.61 GPA)</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.span}>{`● `}</span>
            </span>
            <span>
              <b className={styles.urbanCampus}>Low Cost</b>
              <span>{` ($13,502/year Average) `}</span>
            </span>
          </p>
        </div>
        <b className={styles.computerScienceBsContainer}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            <span className={styles.span}>{`● `}</span>
            <span>Computer Science (B.S.)</span>
          </p>
          <p className={styles.blankLine}>
            <span className={styles.span}>{`● `}</span>
            <span>Computer Engineering (B.S.)</span>
          </p>
          <p className={styles.blankLine}>
            <span className={styles.span}>●</span>
            <span> Information Communication (BSBA)</span>
          </p>
        </b>
        <div className={styles.likewiseWithYourContainer}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            <span>{`Likewise, with your interest in `}</span>
            <b className={styles.urbanCampus}>{`Computer Science, `}</b>
          </p>
          <p className={styles.blankLine}>
            these majors could also offer great courses of study:
          </p>
        </div>
        <div className={styles.profileUkChild5} onClick={openProfileButtons3} />
        <div className={styles.saveToMy}>Save to My List</div>
        <img className={styles.path20Icon} alt="" src="/path-20.svg" />
        <div className={styles.profileUkChild6} onClick={onRectangleClick} />
        <div className={styles.viewPhotos}> View Photos</div>
        <img className={styles.path47Icon} alt="" src="/path-47.svg" />
        <div className={styles.profileUkChild7} />
        <div className={styles.viewPhotos}> View Photos</div>
        <img className={styles.path47Icon} alt="" src="/path-47.svg" />
        <div className={styles.div}> ─────── ·✾· ───────</div>
      </div>
      {isProfileButtons3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProfileButtons3}
        >
          <ProfileButtons3/>
        </PortalPopup>
      )}
    </>
  );
};

export default ProfileUK;
