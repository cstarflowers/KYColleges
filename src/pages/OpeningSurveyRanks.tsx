import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OpeningSurveyRanks.module.css";

const OpeningSurveyRanks: FunctionComponent = () => {
  const navigate = useNavigate();

  const onOpeningSurveyRanksContainerClick = useCallback(() => {
    navigate("/opening-survey-ranks-filled");
  }, [navigate]);

  return (
    <div
      className={styles.openingSurveyRanks}
      onClick={onOpeningSurveyRanksContainerClick}
    >
      <div className={styles.openingSurveyRanksChild} />
      <div className={styles.openingSurveyRanksItem} />
      <div className={styles.kyc}>KYC</div>
      <div className={styles.helpUsNarrow}>Help us narrow your search.</div>
      <div className={styles.openingSurveyRanksInner} />
      <div className={styles.lineDiv} />
      <div className={styles.openingSurveyRanksChild1} />
      <div className={styles.openingSurveyRanksChild2} />
      <div className={styles.rectangleDiv} />
      <div className={styles.openingSurveyRanksChild3} />
      <img className={styles.path4Icon} alt="" src="/path-4.svg" />
      <div className={styles.openingSurveyRanksChild4} />
      <div className={styles.openingSurveyRanksChild5} />
      <div className={styles.openingSurveyRanksChild6} />
      <img className={styles.path1Icon} alt="" src="/path-1.svg" />
      <div className={styles.welcomeCarson}>Welcome, Carson!</div>
      <img className={styles.en42fabIcon} alt="" src="/en42fab@2x.png" />
      <img
        className={styles.defaultAvatarProfileIconSo}
        alt=""
        src="/defaultavatarprofileiconsocialmediauserimagegrayavatariconblankprofilesilhouetteillustrationvector@2x.png"
      />
      <div className={styles.pleaseRankThe}>
        Please rank the following criteria 1-5:
      </div>
      <div className={styles.openingSurveyRanksChild7} />
      <div className={styles.div}>1)</div>
      <div className={styles.openingSurveyRanksChild8} />
      <div className={styles.div1}>2)</div>
      <div className={styles.openingSurveyRanksChild9} />
      <div className={styles.div2}>3)</div>
      <div className={styles.openingSurveyRanksChild10} />
      <div className={styles.div3}>4)</div>
      <div className={styles.openingSurveyRanksChild11} />
      <div className={styles.div4}>5)</div>
      <div className={styles.location}>Location</div>
      <div className={styles.size}>Size</div>
      <div className={styles.major}>Major</div>
      <div className={styles.extracurriculars}>Extracurriculars</div>
      <div className={styles.openingSurveyRanksChild12} />
      <div className={styles.tuition}>Tuition</div>
      <div className={styles.openingSurveyRanksChild13} />
      <div className={styles.location1}>Location</div>
      <div className={styles.openingSurveyRanksChild14} />
      <div className={styles.size1}>Size</div>
      <div className={styles.openingSurveyRanksChild15} />
      <div className={styles.major1}>Major</div>
      <div className={styles.openingSurveyRanksChild16} />
      <div className={styles.extracurriculars1}>Extracurriculars</div>
      <img
        className={styles.collegeHallIcon}
        alt=""
        src="/7-college-hall@2x.png"
      />
      <div className={styles.openingSurveyRanksChild17} />
      <div className={styles.helpUsNarrow1}>Help us narrow your search.</div>
      <div className={styles.welcomeCarson1}>Welcome, Carson!</div>
      <img className={styles.path41Icon} alt="" src="/path-41.svg" />
      <img className={styles.path45Icon} alt="" src="/path-45.svg" />
      <img
        className={styles.nopathCopy45}
        alt=""
        src="/nopath--copy-45@2x.png"
      />
    </div>
  );
};

export default OpeningSurveyRanks;
