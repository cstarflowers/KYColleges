import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserSettings.module.css";

const UserSettings: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEN42FAbImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.userSettings}>
      <img
        className={styles.collegeHallIcon}
        alt=""
        src="/7-college-hall@2x.png"
      />
      <div className={styles.userSettingsChild} />
      <div className={styles.userSettingsItem} />
      <div className={styles.helpUsNarrow}>Help us narrow your search.</div>
      <div className={styles.userSettingsInner} />
      <div className={styles.lineDiv} />
      <div className={styles.userSettingsChild1} />
      <div className={styles.userSettingsChild2} />
      <div className={styles.rectangleDiv} />
      <img className={styles.path4Icon} alt="" src="/path-4.svg" />
      <div className={styles.userSettingsChild3} />
      <div className={styles.userSettingsChild4} />
      <img className={styles.path1Icon} alt="" src="/path-1.svg" />
      <div className={styles.welcomeCarson}>Welcome, Carson!</div>
      <img
        className={styles.en42fabIcon}
        alt=""
        src="/en42fab@2x.png"
        onClick={onEN42FAbImageClick}
      />
      <div className={styles.userSettingsChild5} />
      <div className={styles.dragToRearrange}>
        Drag to rearrange your criteria:
      </div>
      <div className={styles.userSettingsChild6} />
      <div className={styles.div}>1)</div>
      <div className={styles.tuitioncost}>Tuition/Cost</div>
      <div className={styles.userSettingsChild7} />
      <div className={styles.div1}>2)</div>
      <div className={styles.location}>{`Location `}</div>
      <div className={styles.userSettingsChild8} />
      <div className={styles.div2}>3)</div>
      <div className={styles.size}>Size</div>
      <div className={styles.userSettingsChild9} />
      <div className={styles.div3}>4)</div>
      <div className={styles.major}>Major</div>
      <div className={styles.userSettingsChild10} />
      <div className={styles.div4}>5)</div>
      <div className={styles.extracurriculars}>Extracurriculars</div>
      <div className={styles.userSettingsChild11} />
      <div className={styles.subscribeToOur}>Subscribe to our newsletter!</div>
      <div className={styles.userSettingsChild12} />
      <img
        className={styles.path41Icon}
        alt=""
        src="/path-411.svg"
        onClick={onEN42FAbImageClick}
      />
      <div className={styles.egNamegmailcom}>e.g. name@gmail.com</div>
      <img className={styles.groupIcon} alt="" src="/group-1.svg" />
      <img className={styles.path45Icon} alt="" src="/path-451.svg" />
      <img
        className={styles.nopathCopy45}
        alt=""
        src="/nopath--copy-45@2x.png"
      />
    </div>
  );
};

export default UserSettings;
