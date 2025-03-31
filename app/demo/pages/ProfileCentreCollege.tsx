import { FunctionComponent, useState, useCallback } from "react";
import ProfileButtons from "../components/ProfileButtons";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileCentreCollege.module.css";

const ProfileCentreCollege: FunctionComponent = () => {
  const [isProfileButtonsOpen, setProfileButtonsOpen] = useState(false);
  const navigate = useNavigate();

  const openProfileButtons = useCallback(() => {
    setProfileButtonsOpen(true);
  }, []);

  const closeProfileButtons = useCallback(() => {
    setProfileButtonsOpen(false);
  }, []);

  const onEN42FAbImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/profile-centre-gallery");
  }, [navigate]);

  return (
    <>
      <div className={styles.profileCentreCollege}>
        <div className={styles.profileCentreCollegeChild} />
        <div className={styles.profileCentreCollegeItem} />
        <div className={styles.profileCentreCollegeInner} />
        <div className={styles.lineDiv} />
        <div className={styles.rectangleDiv} />
        <div className={styles.profileCentreCollegeChild1} />
        <div className={styles.profileCentreCollegeChild2} />
        <img
          className={styles.nopathCopy29}
          alt=""
          src="/nopath--copy-29@2x.png"
        />
        <img className={styles.path1Icon} alt="" src="/path-1.svg" />
        <div className={styles.profileCentreCollegeChild3} />
        <div className={styles.profileCentreCollegeChild4} />
        <img
          className={styles.en42fabIcon}
          alt=""
          src="/en42fab@2x.png"
          onClick={onEN42FAbImageClick}
        />
        <div className={styles.centreCollege}>Centre College</div>
        <img
          className={styles.path41Icon}
          alt=""
          src="/path-41.svg"
          onClick={onEN42FAbImageClick}
        />
        <img className={styles.path45Icon} alt="" src="/path-45.svg" />
        <div className={styles.match628}>100% Match | 62.8% Acceptance</div>
        <div className={styles.basedOnYourContainer}>
          {`Based on your current profile, we believe that the `}
          <span className={styles.centreCollege1}>Centre College</span> would be
          a great fit for you!
        </div>
        <div className={styles.suburbanCampusDanvilleContainer}>
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
              <b className={styles.suburbanCampus}>{`Suburban Campus `}</b>
              <span>(Danville; 41.8k citizens)</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.span}>●</span>
            </span>
            <span>
              <span>{` `}</span>
              <b className={styles.suburbanCampus}>{`Low Enrollment `}</b>
              <span
                className={styles.suburbanCampus}
              >{`(1,242 Undergraduates) `}</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <b className={styles.suburbanCampus}>
              <span className={styles.span}>{`● `}</span>
            </b>
            <span>
              <b className={styles.suburbanCampus}>Strong Academics</b>
              <span> (30 ACT, 3.80 GPA)</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.span}>{`● `}</span>
            </span>
            <span>
              <b className={styles.suburbanCampus}>High Cost</b>
              <span>{` ($52,820/year Average) `}</span>
            </span>
          </p>
        </div>
        <b className={styles.computerScienceBaContainer}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            <span className={styles.span}>{`● `}</span>
            <span>Computer Science (B.A.)</span>
          </p>
          <span />
        </b>
        <div className={styles.likewiseWithYourContainer}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            <span>{`Likewise, with your interest in `}</span>
            <b className={styles.suburbanCampus}>{`Computer Science, `}</b>
          </p>
          <p className={styles.blankLine}>
            these majors could also offer great courses of study:
          </p>
        </div>
        <div
          className={styles.profileCentreCollegeChild5}
          onClick={openProfileButtons}
        />
        <div className={styles.saveToMy}>Save to My List</div>
        <img className={styles.path20Icon} alt="" src="/path-20.svg" />
        <div
          className={styles.profileCentreCollegeChild6}
          onClick={onRectangleClick}
        />
        <div className={styles.viewPhotos}> View Photos</div>
        <img className={styles.path47Icon} alt="" src="/path-47.svg" />
        <div className={styles.profileCentreCollegeChild7} />
        <div className={styles.viewPhotos}> View Photos</div>
        <img className={styles.path47Icon} alt="" src="/path-47.svg" />
        <div className={styles.div}> ─────── ·✾· ───────</div>
      </div>
      {isProfileButtonsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProfileButtons}
        >
          <ProfileButtons onClose={closeProfileButtons} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProfileCentreCollege;
