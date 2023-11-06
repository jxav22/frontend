import React from "react";
import styles from "./MobileConnectionPage.module.css";
import Logo from "../Logo/Logo";
import Stats from "../Stats/Stats";

function MobileConnectionPage() {
  const [currentState, setCurrentState] = React.useState<string>("");

  let stateStyling: string;
  switch (currentState) {
    case "venter":
      stateStyling = styles.venterSelected;
      break;
    case "listener":
      stateStyling = styles.listenerSelected;
      break;
    default:
      stateStyling = "";
      break;
  }

  const handleSelectVenter = () => {
    setCurrentState("venter");
  };

  const handleSelectListener = () => {
    setCurrentState("listener");
  };

  return (
    <div className={stateStyling}>
      <div className={styles.container}>
        <div className={styles.ventSection} onClick={handleSelectVenter}>
          <h1 className={styles.ventHeading}>VENT</h1>
            <h2 className={styles.ventSubheading}>talk or release</h2>
        </div>
        <div className={styles.listenSection} onClick={handleSelectListener}>
          <h1 className={styles.listenHeading}>LISTEN</h1>
            <h2 className={styles.listenSubheading}>help someone out</h2>
        </div>
        <Stats ventersOnline={0} listenersOnline={0} />
        <Logo />
      </div>
    </div>
  );
}

export default MobileConnectionPage;
