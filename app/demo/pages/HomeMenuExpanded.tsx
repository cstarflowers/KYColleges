import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeMenuExpanded.module.css";

const HomeMenuExpanded: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/profile-centre-college");
  }, [navigate]);

  const onPath16IconClick = useCallback(() => {
    navigate("/home-filter-expanded");
  }, [navigate]);

  const onNoPathCopyClick = useCallback(() => {
    navigate("/profile-uofl-favorite");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMyProfileTextClick = useCallback(() => {
    navigate("/user-settings");
  }, [navigate]);

  return (
    <div className={styles.homeMenuExpanded}>
      <div className={styles.homeMenuExpandedChild} />
      <div className={styles.homeMenuExpandedItem} />
      <div className={styles.yourSchools}>Your Schools</div>
      <img
        className={styles.c76a8d10D20f4551B9d33a4eecIcon}
        alt=""
        src="/c76a8d10d20f4551b9d33a4eec4d045b-1920x1080@2x.png"
      />
      <img className={styles.path4Icon} alt="" src="/path-4.svg" />
      <div className={styles.yourSchools}>Your Schools</div>
      <div className={styles.homeMenuExpandedInner} />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.cornellUniversity}>Cornell University</div>
      <div className={styles.ithacaNyDueContainer}>
        <p className={styles.ithacaNy}>{`📍 Ithaca, NY `}</p>
        <p className={styles.ithacaNy}>Due 01/02/2025</p>
      </div>
      <div className={styles.yourMatches}>Your Matches</div>
      <div className={styles.rectangleDiv} onClick={onRectangleClick} />
      <img className={styles.image3Icon1} alt="" src="/image-3@2x.png" />
      <div className={styles.centreCollege}>Centre College</div>
      <div className={styles.danvilleKy}>📍 Danville, KY</div>
      <div className={styles.homeMenuExpandedChild1} />
      <img
        className={styles.nopathCopy18}
        alt=""
        src="/nopath--copy-18@2x.png"
      />
      <div className={styles.homeMenuExpandedChild2} />
      <div className={styles.homeMenuExpandedChild3} />
      <div className={styles.homeMenuExpandedChild4} />
      <div className={styles.homeMenuExpandedChild5} />
      <img className={styles.image3Icon2} alt="" src="/image-3@2x.png" />
      <div className={styles.universityOfKentucky}>University of Kentucky</div>
      <div className={styles.lexingtonKy}>📍 Lexington, KY</div>
      <div className={styles.homeMenuExpandedChild6} />
      <div className={styles.homeMenuExpandedChild7} />
      <div className={styles.homeMenuExpandedChild8} />
      <img
        className={styles.nopathCopy16}
        alt=""
        src="/nopath--copy-16@2x.png"
      />
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <img
        className={styles.path16Icon}
        alt=""
        src="/path-16.svg"
        onClick={onPath16IconClick}
      />
      <div
        className={styles.homeMenuExpandedChild9}
        onClick={onPath16IconClick}
      />
      <div className={styles.homeMenuExpandedInner} />
      <img
        className={styles.nopathCopy15}
        alt=""
        src="/nopath--copy-15@2x.png"
        onClick={onNoPathCopyClick}
      />
      <div className={styles.universityOfLouisville}>
        University of Louisville
      </div>
      <div className={styles.ithacaNyDueContainer}>
        <p className={styles.ithacaNy}>{`📍 Louisville, KY `}</p>
        <p className={styles.ithacaNy}>Due 02/15/2025</p>
      </div>
      <img
        className={styles.c76a8d10D20f4551B9d33a4eecIcon}
        alt=""
        src="/360-f-135902796-alc9asbpfwjapmhegul4i9qsecld6ui7@2x.png"
      />
      <div className={styles.lineDiv} />
      <div className={styles.homeMenuExpandedChild11} />
      <div className={styles.homeMenuExpandedChild12} />
      <div className={styles.homeMenuExpandedChild13} />
      <div className={styles.homeMenuExpandedChild14} />
      <img className={styles.path1Icon} alt="" src="/path-1.svg" />
      <img className={styles.path45Icon} alt="" src="/path-45.svg" />
      <img className={styles.path41Icon} alt="" src="/path-41.svg" />
      <div className={styles.homeMenuExpandedChild15} />
      <div className={styles.homeMenuExpandedChild16} />
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
      <div className={styles.bugReporting}>Bug Reporting</div>
      <img className={styles.path41Icon1} alt="" src="/path-412.svg" />
      <img className={styles.path42Icon} alt="" src="/path-42.svg" />
      <div className={styles.myProfile} onClick={onMyProfileTextClick}>
        My Profile
      </div>
      <img className={styles.en42fabIcon} alt="" src="/en42fab@2x.png" />
      <img className={styles.path45Icon1} alt="" src="/path-45.svg" />
      <div className={styles.location}>Location</div>
      <div className={styles.size}> Size</div>
      <div className={styles.major}> Major</div>
      <div className={styles.major1}> Major</div>
      <div className={styles.clubs}> Clubs</div>
      <div className={styles.dorms}> Dorms</div>
    </div>
  );
};

export default HomeMenuExpanded;
