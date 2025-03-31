import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OpeningSurveyRanksFilled.module.css";

const OpeningSurveyRanksFilled: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEN42FAbImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPathClick = useCallback(() => {
    navigate("/opening-survey-majorstats");
  }, [navigate]);

  return (
    <div className={styles.openingSurveyRanksFilled}>
      <div className={styles.openingSurveyRanksFilledChild} />
      <div className={styles.openingSurveyRanksFilledItem} />
      <div className={styles.kyc}>KYC</div>
      <div className={styles.helpUsNarrow}>Help us narrow your search.</div>
      <div className={styles.openingSurveyRanksFilledInner} />
      <div className={styles.lineDiv} />
      <div className={styles.openingSurveyRanksFilledChild1} />
      <div className={styles.openingSurveyRanksFilledChild2} />
      <div className={styles.rectangleDiv} />
      <img className={styles.path4Icon} alt="" src="/path-4.svg" />
      <div className={styles.openingSurveyRanksFilledChild3} />
      <div className={styles.openingSurveyRanksFilledChild4} />
      <img className={styles.path1Icon} alt="" src="/path-1.svg" />
      <div className={styles.welcomeCarson}>Welcome, Carson!</div>
      <img
        className={styles.en42fabIcon}
        alt=""
        src="/en42fab@2x.png"
        onClick={onEN42FAbImageClick}
      />
      <img
        className={styles.defaultAvatarProfileIconSo}
        alt=""
        src="/defaultavatarprofileiconsocialmediauserimagegrayavatariconblankprofilesilhouetteillustrationvector@2x.png"
      />
      <div className={styles.openingSurveyRanksFilledChild5} />
      <div className={styles.openingSurveyRanksFilledChild6} />
      <div className={styles.tuitioncost}>Tuition/Cost</div>
      <div className={styles.openingSurveyRanksFilledChild7} />
      <div className={styles.location}>Location</div>
      <div className={styles.openingSurveyRanksFilledChild8} />
      <div className={styles.size}>Size</div>
      <div className={styles.openingSurveyRanksFilledChild9} />
      <div className={styles.major}>Major</div>
      <div className={styles.openingSurveyRanksFilledChild10} />
      <div className={styles.extracurriculars}>Extracurriculars</div>
      <img
        className={styles.path17Icon}
        alt=""
        src="/path-17.svg"
        onClick={onPathClick}
      />
      <b className={styles.continue}>Continue</b>
      <img className={styles.path28Icon} alt="" src="/path-17.svg" />
      <b className={styles.continue}>Continue</b>
      <img className={styles.path28Icon} alt="" src="/path-17.svg" />
      <b className={styles.continue}>Continue</b>
      <img className={styles.path28Icon} alt="" src="/path-17.svg" />
      <b className={styles.continue}>Continue</b>
      <img className={styles.path33Icon} alt="" src="/path-25.svg" />
      <img
        className={styles.collegeHallIcon}
        alt=""
        src="/7-college-hall@2x.png"
      />
      <div className={styles.openingSurveyRanksFilledChild11} />
      <div className={styles.helpUsNarrow1}>Help us narrow your search.</div>
      <div className={styles.welcomeCarson1}>Welcome, Carson!</div>
      <div className={styles.div}>1)</div>
      <div className={styles.div1}>2)</div>
      <div className={styles.div2}>3)</div>
      <div className={styles.div3}>4)</div>
      <div className={styles.div4}>5)</div>
      <img className={styles.path41Icon} alt="" src="/path-41.svg" />
      <img className={styles.path45Icon} alt="" src="/path-45.svg" />
      <div className={styles.pleaseRankThe}>
        Please rank the following criteria 1-5:
      </div>
      <img
        className={styles.nopathCopy45}
        alt=""
        src="/nopath--copy-45@2x.png"
      />
    </div>
  );
};

export default OpeningSurveyRanksFilled;
