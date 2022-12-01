import dynamic from "next/dynamic";
import { useState } from "react";
import { ITeamData } from "src/utils/interfaces";
import styles from "./styles.module.scss";

const Instructions = dynamic(() => import("./Instructions"));
const SetupTeam = dynamic(() => import("./SetupTeam"));

interface IProps {
  onSave: (data: ITeamData) => void;
}

const OnBoardingTemplate = ({ onSave }: IProps) => {
  const [currentSection, setCurrentSection] = useState({
    title: "Welkom bij",
    subTitle: "TeamConnector 2.0",
    section: 1,
  });

  const handleClickNext = () => {
    setCurrentSection({
      title: "Your team",
      subTitle: "Setup your team",
      section: 2,
    });
  };

  return (
    <div className={`outside ${styles.wrapper}`}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.title}>
            <p>{currentSection.title}</p>
            <h1>{currentSection.subTitle}</h1>
          </div>
          {currentSection.section === 1 ? (
            <Instructions onClick={handleClickNext} />
          ) : (
            <SetupTeam onSave={onSave} />
          )}
        </div>
        <div className={styles.wheel}></div>
      </div>
    </div>
  );
};

export default OnBoardingTemplate;
