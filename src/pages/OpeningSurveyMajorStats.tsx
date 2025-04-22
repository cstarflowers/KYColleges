import { FunctionComponent, useState, useCallback } from "react";
import MenuACTSATSelection from "../components/MenuACTSATSelection";
import PortalPopup from "../components/PortalPopup";
import MenuGPASelection from "../components/MenuGPASelection";
import MenuMajorSelection from "../components/MenuMajorSelection";
import { useNavigate } from "react-router-dom";
import styles from "./OpeningSurveyMajorStats.module.css";

const OpeningSurveyMajorStats: FunctionComponent = () => {
  const [isMenuACTSATSelectionOpen, setMenuACTSATSelectionOpen] =
    useState(false);
  const [isMenuGPASelectionOpen, setMenuGPASelectionOpen] = useState(false);
  const [isMenuMajorSelectionOpen, setMenuMajorSelectionOpen] = useState(false);
  const navigate = useNavigate();

  const openMenuACTSATSelection = useCallback(() => {
    setMenuACTSATSelectionOpen(true);
  }, []);

  const closeMenuACTSATSelection = useCallback(() => {
    setMenuACTSATSelectionOpen(false);
  }, []);

  const openMenuGPASelection = useCallback(() => {
    setMenuGPASelectionOpen(true);
  }, []);

  const closeMenuGPASelection = useCallback(() => {
    setMenuGPASelectionOpen(false);
  }, []);

  const openMenuMajorSelection = useCallback(() => {
    setMenuMajorSelectionOpen(true);
  }, []);

  const closeMenuMajorSelection = useCallback(() => {
    setMenuMajorSelectionOpen(false);
  }, []);

  const onPathClick = useCallback(() => {
    navigate("/opening-survey-favorites");
  }, [navigate]);

  return (
    <>
      <div className={styles.openingSurveyMajorstats}>
        <div className={styles.openingSurveyMajorstatsChild} />
        <div className={styles.openingSurveyMajorstatsItem} />
        <div className={styles.kyc}>KYC</div>
        <div className={styles.helpUsNarrow}>Help us narrow your search.</div>
        <div className={styles.openingSurveyMajorstatsInner} />
        <div className={styles.lineDiv} />
        <div className={styles.openingSurveyMajorstatsChild1} />
        <div className={styles.openingSurveyMajorstatsChild2} />
        <div className={styles.rectangleDiv} />
        <div className={styles.openingSurveyMajorstatsChild3} />
        <div className={styles.openingSurveyMajorstatsChild4} />
        <div className={styles.openingSurveyMajorstatsChild5} />
        <img className={styles.path1Icon} alt="" src="/path-1.svg" />
        <div className={styles.welcomeCarson}>Welcome, Carson!</div>
        <img className={styles.en42fabIcon} alt="" src="/en42fab@2x.png" />
        <div className={styles.whatsYourCurrent}>
          What's your current ACT/SAT and GPA?
        </div>
        <img
          className={styles.defaultAvatarProfileIconSo}
          alt=""
          src="/defaultavatarprofileiconsocialmediauserimagegrayavatariconblankprofilesilhouetteillustrationvector@2x.png"
        />
        <div
          className={styles.openingSurveyMajorstatsChild6}
          onClick={openMenuACTSATSelection}
        />
        <div
          className={styles.openingSurveyMajorstatsChild7}
          onClick={openMenuGPASelection}
        />
        <img className={styles.path35Icon} alt="" src="/path-36.svg" />
        <img className={styles.path36Icon} alt="" src="/path-36.svg" />
        <div className={styles.div}>34/1500</div>
        <div className={styles.div1}>3.8-4.0</div>
        <div className={styles.openingSurveyMajorstatsChild8} />
        <div className={styles.whichFocusArea}>
          Which focus area is closest to your major?
        </div>
        <div
          className={styles.openingSurveyMajorstatsChild9}
          onClick={openMenuMajorSelection}
        />
        <img className={styles.path38Icon} alt="" src="/path-36.svg" />
        <div className={styles.computerScience}>Computer Science</div>
        <img className={styles.path17Icon} alt="" src="/path-17.svg" />
        <b className={styles.continue}>Continue</b>
        <img className={styles.path25Icon} alt="" src="/path-25.svg" />
        <img className={styles.path17Icon} alt="" src="/path-17.svg" />
        <b className={styles.continue}>Continue</b>
        <img className={styles.path25Icon} alt="" src="/path-25.svg" />
        <img className={styles.path17Icon} alt="" src="/path-17.svg" />
        <b className={styles.continue}>Continue</b>
        <img className={styles.path25Icon} alt="" src="/path-25.svg" />
        <img
          className={styles.path32Icon}
          alt=""
          src="/path-17.svg"
          onClick={onPathClick}
        />
        <b className={styles.continue}>Continue</b>
        <img className={styles.path25Icon} alt="" src="/path-25.svg" />
        <img
          className={styles.collegeHallIcon}
          alt=""
          src="/7-college-hall@2x.png"
        />
        <div className={styles.openingSurveyMajorstatsChild10} />
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
      {isMenuACTSATSelectionOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenuACTSATSelection}
        >
          <MenuACTSATSelection/>
        </PortalPopup>
      )}
      {isMenuGPASelectionOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenuGPASelection}
        >
          <MenuGPASelection/>
        </PortalPopup>
      )}
      {isMenuMajorSelectionOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenuMajorSelection}
        >
          <MenuMajorSelection/>
        </PortalPopup>
      )}
    </>
  );
};

export default OpeningSurveyMajorStats;
