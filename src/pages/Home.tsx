import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/profile-centre-college");
  }, [navigate]);

  const onNoPathCopyClick = useCallback(() => {
    navigate("/profile-uk");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/home-menu-expanded");
  }, [navigate]);

  const onPath16IconClick = useCallback(() => {
    navigate("/home-filter-expanded");
  }, [navigate]);

  const onNoPathCopyClick1 = useCallback(() => {
    navigate("/profile-uofl-favorite");
  }, [navigate]);

  const onRectangleClick2 = useCallback(() => {
    navigate("/user-settings");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.homeChild} />
      <div className={styles.homeItem} />
      <div className={styles.yourSchools}>Your Schools</div>
      <div className={styles.homeInner} />
      <img
        className={styles.f135902796Alc9asbpfwjapmheguIcon}
        alt=""
        src="/360-f-135902796-alc9asbpfwjapmhegul4i9qsecld6ui7@2x.png"
      />
      <div className={styles.yourMatches}>Your Matches</div>
      <div className={styles.rectangleDiv} onClick={onRectangleClick} />
      <img className={styles.image3Icon1} alt="" src="/image-3@2x.png" />
      <div className={styles.centreCollege}>Centre College</div>
      <div className={styles.danvilleKy}>📍 Danville, KY</div>
      <div className={styles.homeChild1} />
      <img
        className={styles.nopathCopy18}
        alt=""
        src="/nopath--copy-18@2x.png"
      />
      <div className={styles.homeChild2} />
      <div className={styles.location}>Location</div>
      <div className={styles.homeChild3} />
      <div className={styles.size}> Size</div>
      <div className={styles.homeChild4} />
      <div className={styles.major}> Major</div>
      <div className={styles.homeChild5} />
      <div className={styles.universityOfKentucky}>University of Kentucky</div>
      <div className={styles.lexingtonKy}>📍 Lexington, KY</div>
      <div className={styles.homeChild6} />
      <div className={styles.major1}> Major</div>
      <div className={styles.homeChild7} />
      <div className={styles.clubs}> Clubs</div>
      <div className={styles.homeChild8} />
      <div className={styles.dorms}> Dorms</div>
      <img
        className={styles.nopathCopy16}
        alt=""
        src="/nopath--copy-16@2x.png"
        onClick={onNoPathCopyClick}
      />
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <div className={styles.lineDiv} />
      <div className={styles.homeChild9} />
      <div className={styles.homeChild10} />
      <div className={styles.homeChild11} />
      <div className={styles.homeChild12} />
      <img className={styles.path1Icon} alt="" src="/path-1.svg" />
      <div className={styles.homeChild13} onClick={onRectangleClick1} />
      <img
        className={styles.path16Icon}
        alt=""
        src="/path-16.svg"
        onClick={onPath16IconClick}
      />
      <div className={styles.homeChild14} onClick={onPath16IconClick} />
      <img className={styles.en42fabIcon} alt="" src="/en42fab@2x.png" />
      <img className={styles.path41Icon} alt="" src="/path-41.svg" />
      <div className={styles.homeInner} />
      <img
        className={styles.nopathCopy15}
        alt=""
        src="/nopath--copy-15@2x.png"
        onClick={onNoPathCopyClick1}
      />
      <div className={styles.universityOfLouisville}>
        University of Louisville
      </div>
      <div className={styles.ithacaNyDueContainer}>
        <p className={styles.ithacaNy}>{`📍 Louisville, KY `}</p>
        <p className={styles.ithacaNy}>Due 02/15/2025</p>
      </div>
      <div className={styles.homeChild16} onClick={onRectangleClick2} />
      <img className={styles.path45Icon} alt="" src="/path-45.svg" />
    </div>
  );
};

export default Home;
