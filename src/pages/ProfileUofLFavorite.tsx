import { FunctionComponent, useState, useCallback } from "react";
import ProfileButtons2 from "../components/ProfileButtons2";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileUofLFavorite.module.css";

const ProfileUofLFavorite: FunctionComponent = () => {
  const [isProfileButtons2Open, setProfileButtons2Open] = useState(false);
  const navigate = useNavigate();

  const openProfileButtons2 = useCallback(() => {
    setProfileButtons2Open(true);
  }, []);

  const closeProfileButtons2 = useCallback(() => {
    setProfileButtons2Open(false);
  }, []);

  const onEN42FAbImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/profile-uofl-match");
  }, [navigate]);

  return (
    <>
      <div className={styles.profileUoflFavorite}>
        <div className={styles.profileUoflFavoriteChild} />
        <div className={styles.profileUoflFavoriteItem} />
        <div className={styles.profileUoflFavoriteInner} />
        <div className={styles.lineDiv} />
        <div className={styles.rectangleDiv} />
        <div className={styles.profileUoflFavoriteChild1} />
        <div className={styles.profileUoflFavoriteChild2} />
        <img
          className={styles.nopathCopy20}
          alt=""
          src="/nopath--copy-20@2x.png"
        />
        <img className={styles.path1Icon} alt="" src="/path-1.svg" />
        <div className={styles.profileUoflFavoriteChild3} />
        <div className={styles.nopathCopy19} />
        <img
          className={styles.en42fabIcon}
          alt=""
          src="/en42fab@2x.png"
          onClick={onEN42FAbImageClick}
        />
        <div className={styles.universityOfLouisville}>
          University of Louisville
        </div>
        <img
          className={styles.path41Icon}
          alt=""
          src="/path-41.svg"
          onClick={onEN42FAbImageClick}
        />
        <img className={styles.path45Icon} alt="" src="/path-45.svg" />
        <div className={styles.match81}>74% Match | 81% Acceptance</div>
        <div className={styles.itsAmazingThatContainer}>
          {`It's amazing that you're applying to the `}
          <span className={styles.universityOfLouisville1}>
            University of Louisville!
          </span>{" "}
          Before submitting, don't forget to include:
        </div>
        <div className={styles.takeFlightApplicationContainer}>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.span}>{`● `}</span>
            </span>
            <b>
              <span>Take Flight Application</span>
            </b>
          </p>
          <p className={styles.blankLine}>
            <b>
              <span className={styles.span}>{`● `}</span>
              <span>UofL Account Verification</span>
            </b>
          </p>
          <p className={styles.blankLine}>
            <b>
              <span className={styles.span}>{`● `}</span>
              <span>High School Transcript</span>
            </b>
          </p>
          <p className={styles.blankLine}>
            <b>
              <span className={styles.span}>{`● `}</span>
              <span>{`ACT/SAT Score Reports `}</span>
            </b>
            <span>
              <span className={styles.optional}>(optional)</span>
              <b className={styles.optional}>{` `}</b>
            </span>
          </p>
        </div>
        <div className={styles.yourStatsCurrentlyContainer}>
          <p className={styles.blankLine}>
            <span className={styles.optional}>&nbsp;</span>
          </p>
          <p className={styles.blankLine}>
            <span className={styles.optional}>{`Your stats currently `}</span>
            <b className={styles.optional}>{`highly competitive, `}</b>
            <span
              className={styles.optional}
            >{`exceeding this college's average test score of `}</span>
            <b className={styles.optional}>{`23/1140 `}</b>
            <span className={styles.optional}>{`and GPA of `}</span>
            <b className={styles.optional}>{`3.6! `}</b>
          </p>
          <p className={styles.blankLine}>
            <span className={styles.optional}>&nbsp;</span>
          </p>
          <p className={styles.blankLine}>
            <span
              className={styles.optional}
            >{`This application is due on `}</span>
            <b className={styles.optional}>{`February 15th, 2025 `}</b>
            <span className={styles.optional}>{`and costs `}</span>
            <b className={styles.optional}>$30</b>
            <span
              className={styles.optional}
            >{` to submit via Take Flight. For additional information, please see `}</span>
            <span className={styles.optional}>
              <span className={styles.universityOfLouisville1}>
                UofL's website!
              </span>
            </span>
          </p>
        </div>
        <div className={styles.profileUoflFavoriteChild4} />
        <div className={styles.saveToMy}>Save to My List</div>
        <img className={styles.path20Icon} alt="" src="/path-20.svg" />
        <div className={styles.profileUoflFavoriteChild5} />
        <div className={styles.viewPhotos}> View Photos</div>
        <img className={styles.path47Icon} alt="" src="/path-47.svg" />
        <div
          className={styles.profileUoflFavoriteChild6}
          onClick={onRectangleClick}
        />
        <div className={styles.switchView}> Switch View</div>
        <div className={styles.div}> ─────── ·✾· ───────</div>
        <div className={styles.profileUoflFavoriteChild7} />
        <div
          className={styles.profileUoflFavoriteChild8}
          onClick={openProfileButtons2}
        />
        <div className={styles.saved}> Saved!</div>
        <img className={styles.path20Icon} alt="" src="/path-20.svg" />
        <img className={styles.path23Icon} alt="" src="/path-23.svg" />
        <img className={styles.path49Icon} alt="" src="/path-49.svg" />
      </div>
      {isProfileButtons2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProfileButtons2}
        >
          <ProfileButtons2/>
        </PortalPopup>
      )}
    </>
  );
};

export default ProfileUofLFavorite;
