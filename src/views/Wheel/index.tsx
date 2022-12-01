import Image from "next/image";
import { useState } from "react";
import { ITeamData } from "src/utils/interfaces";
import OnBoardingTemplate from "templates/OnBoardingPopupTemplate";
import Navbar from "./components/Navbar";
import styles from "./styles.module.scss";

const Wheel = () => {
  const [isOnBoarding, setIsOnBoarding] = useState(true);

  const handleOnSave = (data: ITeamData) => {
    console.log(data);
    setIsOnBoarding(false);
  };

  return (
    <>
      {isOnBoarding && <OnBoardingTemplate onSave={handleOnSave} />}
      <div id="main" className={styles.wrapper}>
        <div>
          <Navbar />
          <div className={styles.wheelContainer}>
            <Image
              src="/images/wheel-2.png"
              width={900}
              height={611}
              alt="Wheel"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wheel;
