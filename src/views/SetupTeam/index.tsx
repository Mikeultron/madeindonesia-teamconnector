import OnBoardingTemplate from "templates/OnBoardingTemplate";
import Input from "./components/Input";
import InputAdd from "./components/InputAdd";
import styles from "./styles.module.scss";

const SetupTeam = () => {
  return (
    <OnBoardingTemplate title="Your Team" subTitle="Setup your team">
      <div className={styles.container}>
        <p>
          Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
          Proin porta est convallis lacus blandit
        </p>
        <div className={styles.inputs}>
          <Input label="Team name" placeholder="Team Name" />
          <InputAdd label="Team members" placeholder="Team Members" />
        </div>
      </div>
    </OnBoardingTemplate>
  );
};

export default SetupTeam;
