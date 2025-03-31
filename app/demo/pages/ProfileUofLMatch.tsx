import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileUofLMatch.module.css";

const ProfileUofLMatch: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEN42FAbImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/profile-uofl-favorite");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/profile-uofl-gallery");
  }, [navigate]);

  return (
    <div className={styles.profileUoflMatch}>
      <div className={styles.profileUoflMatchChild} />
      <div className={styles.profileUoflMatchItem} />
      <div className={styles.profileUoflMatchInner} />
      <div className={styles.lineDiv} />
      <div className={styles.rectangleDiv} />
      <div className={styles.profileUoflMatchChild1} />
      <div className={styles.profileUoflMatchChild2} />
      <img className={styles.path1Icon} alt="" src="/path-1.svg" />
      <div className={styles.profileUoflMatchChild3} />
      <img
        className={styles.en42fabIcon}
        alt=""
        src="/en42fab@2x.png"
        onClick={onEN42FAbImageClick}
      />
      <img
        className={styles.path41Icon}
        alt=""
        src="/path-41.svg"
        onClick={onEN42FAbImageClick}
      />
      <img className={styles.path45Icon} alt="" src="/path-45.svg" />
      <div className={styles.basedOnYourContainer}>
        <p
          className={styles.basedOnYour}
        >{`Based on your current profile, we believe that the `}</p>
        <p className={styles.basedOnYour}>
          <span className={styles.universityOfLouisville}>
            University of Louisville
          </span>{" "}
          would be a great fit for you!
        </p>
      </div>
      <div className={styles.profileUoflMatchChild4} />
      <div className={styles.viewPhotos}> View Photos</div>
      <img className={styles.path47Icon} alt="" src="/path-47.svg" />
      <div
        className={styles.profileUoflMatchChild5}
        onClick={onRectangleClick}
      />
      <div className={styles.switchView}> Switch View</div>
      <img className={styles.path49Icon} alt="" src="/path-49.svg" />
      <div className={styles.urbanCampusLouisvilleContainer}>
        <p className={styles.basedOnYour}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.basedOnYour}>
          <span>
            <span className={styles.span}>{`● `}</span>
          </span>
          <span>
            <b className={styles.urbanCampus}>{`Urban Campus `}</b>
            <span>(Louisville; 623k citizens)</span>
          </span>
        </p>
        <p className={styles.basedOnYour}>
          <span>
            <span className={styles.span}>●</span>
          </span>
          <span>
            <span>{` `}</span>
            <b className={styles.urbanCampus}>{`Large Enrollment `}</b>
            <span
              className={styles.urbanCampus}
            >{`(16,397 Undergraduates) `}</span>
          </span>
        </p>
        <p className={styles.basedOnYour}>
          <b className={styles.urbanCampus}>
            <span className={styles.span}>{`● `}</span>
          </b>
          <span>
            <b className={styles.urbanCampus}>Average Academics</b>
            <span> (23 ACT, 3.64 GPA)</span>
          </span>
        </p>
        <p className={styles.basedOnYour}>
          <span>
            <span className={styles.span}>{`● `}</span>
          </span>
          <span>
            <b className={styles.urbanCampus}>Low Cost</b>
            <span>{` ($13,136/year Average) `}</span>
          </span>
        </p>
      </div>
      <b className={styles.computerScienceBaContainer}>
        <p className={styles.basedOnYour}>&nbsp;</p>
        <p className={styles.basedOnYour}>
          <span className={styles.span}>{`● `}</span>
          <span>Computer Science (B.A.)</span>
        </p>
        <p className={styles.basedOnYour}>
          <span className={styles.span}>●</span>
          <span> Computer Science and Engineering (B.S.)</span>
        </p>
        <p className={styles.basedOnYour}>
          <span className={styles.span}>{`● `}</span>
          <span>Computer Information Systems (BSBA)</span>
        </p>
      </b>
      <div className={styles.likewiseWithYourContainer}>
        <p className={styles.basedOnYour}>&nbsp;</p>
        <p className={styles.basedOnYour}>
          <span>{`Likewise, with your interest in `}</span>
          <b className={styles.urbanCampus}>{`Computer Science, `}</b>
        </p>
        <p className={styles.basedOnYour}>
          these majors could also offer great courses of study:
        </p>
      </div>
      <div
        className={styles.profileUoflMatchChild6}
        onClick={onRectangleClick1}
      />
      <div className={styles.viewPhotos1}> View Photos</div>
      <img className={styles.path48Icon} alt="" src="/path-47.svg" />
      <div className={styles.div}> ─────── ·✾· ───────</div>
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

export default ProfileUofLMatch;
