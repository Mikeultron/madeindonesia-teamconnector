import Button from "atoms/Button";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";

const SetupTeamPopup = dynamic(() => import("templates/SetupTeamPopup"));
const HowToPlayPopup = dynamic(() => import("templates/HowToPlayPopup"));

const Navbar = () => {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showSetupTeam, setShowSetupTeam] = useState(false);

  const handleShowHowToPlay = () => setShowHowToPlay(true);
  const handleCloseHowToPlay = () => setShowHowToPlay(false);
  const handleShowSetupTeam = () => setShowSetupTeam(true);
  const handleCloseSetupTeam = () => setShowSetupTeam(false);

  return (
    <>
      {showHowToPlay && <HowToPlayPopup onClose={handleCloseHowToPlay} />}
      {showSetupTeam && <SetupTeamPopup onSave={handleCloseSetupTeam} />}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Image src="/images/logo.png" width={152} height={48} alt="Logo" />
          </div>
          <div className={styles.actions}>
            <div className={styles.action} onClick={handleShowHowToPlay}>
              <Image
                src="/images/book.png"
                width={32}
                height={32}
                alt="Book icon"
              />
            </div>
            <div className={styles.action} onClick={handleShowSetupTeam}>
              <Image
                src="/images/user.png"
                width={32}
                height={32}
                alt="User icon"
              />
            </div>
            <div className={styles.action}>
              <Button>Finish Session</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
