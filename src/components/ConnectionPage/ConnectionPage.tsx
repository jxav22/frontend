import React from "react";
import Logo from "../Logo/Logo";
import styles from "./ConnectionPage.module.css";
import Stats from "../Stats/Stats";

function ConnectionPage() {
  const [stateSelected, setStateSelected] = React.useState<number>(0);

  let stateStyling: string;
  switch (stateSelected) {
    case 1:
      stateStyling = styles.venterSelected;
      break;
    case 2:
      stateStyling = styles.listenerSelected;
      break;
    default:
      stateStyling = "";
      break;
  }

  const handleSelectVenter = () => {
    setStateSelected(1);
  };

  const handleSelectListener = () => {
    setStateSelected(2);
  };

  return (
    <div className={stateStyling}>
      <div className={styles.container}>
        <div className={styles.leftSection} onClick={handleSelectVenter}>
          <h1 className={styles.ventHeader}>VENT</h1>
          <h2 className={styles.ventSubheader}>talk or release</h2>

          {/* {stateSelected === 1 ? <div className={styles.venterDescription}>Vent your woes</div> : <></>} */}
        </div>

        <div className={styles.rightSection} onClick={handleSelectListener}>
          <h1 className={styles.listenHeader}>LISTEN</h1>
          <h2 className={styles.listenSubheader}>help someone out</h2>

          {/* {stateSelected === 2 ? <div className={styles.listenerDescription}>Be kind and supportive and stuff</div> : <></>} */}
        </div>
      </div>
      <div className={styles.statsPositioner}>
        <Stats ventersOnline={0} listenersOnline={0} />
      </div>
      <div className={styles.logoPositioner}>
        <Logo />
      </div>
    </div>
  );
}

export default ConnectionPage;
