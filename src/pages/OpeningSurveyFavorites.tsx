import { FunctionComponent, useState, useCallback } from "react";
import MenuFinishButton from "../components/MenuFinishButton";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./OpeningSurveyFavorites.module.css";

const OpeningSurveyFavorites: FunctionComponent = () => {
  const [isMenuFinishButtonOpen, setMenuFinishButtonOpen] = useState(false);
  const navigate = useNavigate();

  const openMenuFinishButton = useCallback(() => {
    setMenuFinishButtonOpen(true);
  }, []);

  const closeMenuFinishButton = useCallback(() => {
    setMenuFinishButtonOpen(false);
  }, []);

  const onEN42FAbImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.openingSurveyFavorites}>
        <div className={styles.openingSurveyFavoritesChild} />
        <div className={styles.openingSurveyFavoritesItem} />
        <div className={styles.kyc}>KYC</div>
        <div className={styles.wereBuildingYour}>
          We're building your profile now.
        </div>
        <div className={styles.openingSurveyFavoritesInner} />
        <div className={styles.lineDiv} />
        <div className={styles.openingSurveyFavoritesChild1} />
        <div className={styles.openingSurveyFavoritesChild2} />
        <div className={styles.rectangleDiv} />
        <img className={styles.path4Icon} alt="" src="/path-4.svg" />
        <div className={styles.openingSurveyFavoritesChild3} />
        <div className={styles.openingSurveyFavoritesChild4} />
        <img className={styles.path1Icon} alt="" src="/path-1.svg" />
        <div className={styles.thankYou}>Thank You!</div>
        <img
          className={styles.en42fabIcon}
          alt=""
          src="/en42fab@2x.png"
          onClick={onEN42FAbImageClick}
        />
        <div className={styles.openingSurveyFavoritesChild5} />
        <div className={styles.ifYouHave}>
          If you have a school in mind, favorite it now!
        </div>
        <div className={styles.openingSurveyFavoritesChild6} />
        <div className={styles.egCornellUniversity}>
          e.g. Cornell University
        </div>
        <img className={styles.path19Icon} alt="" src="/path-19.svg" />
        <div className={styles.openingSurveyFavoritesChild7} />
        <img
          className={styles.nopathCopy14}
          alt=""
          src="/nopath--copy-14@2x.png"
        />
        <div className={styles.universityOfLouisville}>
          University of Louisville
        </div>
        <div className={styles.louisvilleKyDueContainer}>
          <p className={styles.louisvilleKy}>{`📍 Louisville, KY `}</p>
          <p className={styles.louisvilleKy}>Due 02/15/2025</p>
        </div>
        <img
          className={styles.path20Icon}
          alt=""
          src="/path-201.svg"
          onClick={openMenuFinishButton}
        />
        <img
          className={styles.path17Icon}
          alt=""
          src="/path-17.svg"
          onClick={onEN42FAbImageClick}
        />
        <b className={styles.continue}>Continue</b>
        <img className={styles.path25Icon} alt="" src="/path-25.svg" />
        <img className={styles.path28Icon} alt="" src="/path-17.svg" />
        <b className={styles.continue}>Continue</b>
        <img className={styles.path25Icon} alt="" src="/path-25.svg" />
        <img className={styles.path28Icon} alt="" src="/path-17.svg" />
        <b className={styles.continue}>Continue</b>
        <img className={styles.path25Icon} alt="" src="/path-25.svg" />
        <img className={styles.path28Icon} alt="" src="/path-17.svg" />
        <b className={styles.finish}>Finish!</b>
        <img className={styles.path25Icon} alt="" src="/path-25.svg" />
        <div
          className={styles.openingSurveyFavoritesChild8}
          onClick={openMenuFinishButton}
        />
        <div className={styles.openingSurveyFavoritesChild9} />
        <div className={styles.helpUsNarrow}>Help us narrow your search.</div>
        <div className={styles.welcomeCarson}>Welcome, Carson!</div>
        <img
          className={styles.defaultAvatarProfileIconSo}
          alt=""
          src="/defaultavatarprofileiconsocialmediauserimagegrayavatariconblankprofilesilhouetteillustrationvector@2x.png"
        />
        <img
          className={styles.collegeHallIcon}
          alt=""
          src="/7-college-hall@2x.png"
        />
        <div className={styles.openingSurveyFavoritesChild10} />
        <div className={styles.wereBuildingYour1}>
          We're building your profile.
        </div>
        <div className={styles.thanksCarson}>Thanks, Carson!</div>
        <img className={styles.path41Icon} alt="" src="/path-41.svg" />
        <img className={styles.path45Icon} alt="" src="/path-45.svg" />
        <img
          className={styles.nopathCopy45}
          alt=""
          src="/nopath--copy-45@2x.png"
        />
      </div>
      {isMenuFinishButtonOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenuFinishButton}
        >
          <MenuFinishButton onClose={closeMenuFinishButton} />
        </PortalPopup>
      )}
    </>
  );
};

export default OpeningSurveyFavorites;
