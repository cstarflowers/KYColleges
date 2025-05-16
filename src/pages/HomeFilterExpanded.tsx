import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeFilterExpanded.module.css";

const HomeFilterExpanded: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/profile-centre-college");
  }, [navigate]);

  const onNoPathCopyClick = useCallback(() => {
    navigate("/profile-uofl-favorite");
  }, [navigate]);

  const onPath16IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.homeFilterExpanded}>
      <div className={styles.yourSchools}>Your Schools</div>
      <div className={styles.homeFilterExpandedChild} />
      <div className={styles.yourMatches}>Your Matches</div>
      <div
        className={styles.homeFilterExpandedItem}
        onClick={onRectangleClick}
      />
      <div className={styles.centreCollege}>Centre College</div>
      <div className={styles.danvilleKy}>📍 Danville, KY</div>
      <div className={styles.homeFilterExpandedInner} />
      <img
        className={styles.nopathCopy18}
        alt=""
        src="/nopath--copy-18@2x.png"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.homeFilterExpandedChild1} />
      <div className={styles.homeFilterExpandedChild2} />
      <div className={styles.homeFilterExpandedChild3} />
      <div className={styles.universityOfKentucky}>University of Kentucky</div>
      <div className={styles.lexingtonKy}>📍 Lexington, KY</div>
      <div className={styles.homeFilterExpandedChild4} />
      <div className={styles.homeFilterExpandedChild5} />
      <div className={styles.homeFilterExpandedChild6} />
      <div className={styles.homeFilterExpandedChild7} />
      <div className={styles.homeFilterExpandedChild} />
      <img
        className={styles.nopathCopy15}
        alt=""
        src="/nopath--copy-15@2x.png"
        onClick={onNoPathCopyClick}
      />
      <div className={styles.universityOfLouisville}>
        University of Louisville
      </div>
      <p className={styles.louisvilleKy}>{`📍 Louisville, KY `}</p>
      <p className={styles.louisvilleKyDue}>Due 02/15/2025</p>
      <div className={styles.homeFilterExpandedChild9} />
      <div className={styles.homeFilterExpandedChild10} />
      <img
        className={styles.f135902796Alc9asbpfwjapmheguIcon}
        alt=""
        src="/360-f-135902796-alc9asbpfwjapmhegul4i9qsecld6ui7@2x.png"
      />
      <img className={styles.path4Icon} alt="" src="/path-4.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.homeFilterExpandedChild11} />
      <div className={styles.homeFilterExpandedChild12} />
      <div className={styles.homeFilterExpandedChild13} />
      <div className={styles.homeFilterExpandedChild14} />
      <img className={styles.path1Icon} alt="" src="/path-1.svg" />
      <div className={styles.homeFilterExpandedChild15} />
      <div className={styles.homeFilterExpandedChild16} />
      <img className={styles.en42fabIcon} alt="" src="/en42fab@2x.png" />
      <img
        className={styles.f135902796Alc9asbpfwjapmheguIcon}
        alt=""
        src="/c76a8d10d20f4551b9d33a4eec4d045b-1920x1080@2x.png"
      />
      <img
        className={styles.f135902796Alc9asbpfwjapmheguIcon}
        alt=""
        src="/360-f-135902796-alc9asbpfwjapmhegul4i9qsecld6ui7@2x.png"
      />
      <div className={styles.homeFilterExpandedChild17} />
      <b className={styles.yearColleges}>4-Year Colleges</b>
      <b className={styles.yearColleges1}>2-Year Colleges</b>
      <b className={styles.tradeSchools}>Trade Schools</b>
      <b className={styles.certifications}>Certifications</b>
      <img
        className={styles.path16Icon1}
        alt=""
        src="/path-16.svg"
        onClick={onPath16IconClick}
      />
      <img className={styles.path41Icon} alt="" src="/path-41.svg" />
      <img className={styles.path45Icon} alt="" src="/path-45.svg" />
      <div className={styles.location}>Location</div>
      <div className={styles.size}> Size</div>
      <div className={styles.major}> Major</div>
      <div className={styles.major1}> Major</div>
      <div className={styles.clubs}> Clubs</div>
      <div className={styles.dorms}> Dorms</div>
    </div>
  );
};

export default HomeFilterExpanded;
