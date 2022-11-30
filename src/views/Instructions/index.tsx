import Button from "atoms/Button";
import { useRouter } from "next/router";
import OnBoardingTemplate from "templates/OnBoardingTemplate";
import styles from "./styles.module.scss";

const Instructions = () => {
  const router = useRouter();

  const goToSetupTeam = () => {
    router.push("/setup-team");
  };
  return (
    <OnBoardingTemplate>
      <div className={styles.intro}>
        <ul>
          <li>
            Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
            Proin porta est convallis lacus blandit
          </li>
          <li>Pretium sed non enim. Maecenas lacinia non orci at aliquam.</li>
          <li>
            Donec finibus, urna bibendum ultricies laoreet, augue eros luctus
            sapien, ut euismod leo tortor ac enim.
          </li>
        </ul>
        <div className={styles.info}>
          <p>
            A session of TeamConnector may require <span>± 60 minutes</span> to
            finish.
          </p>
          <div className={styles.sliderContainer}>
            <input
              type="range"
              min={15}
              value={60}
              max={120}
              list="tickmarks"
            />
            <datalist id="tickmarks">
              <option value={15}>
                15 <span>min</span>
              </option>
              <option value={30}></option>
              <option value={45}></option>
              <option value={60}></option>
              <option value={75}></option>
              <option value={90}></option>
              <option value={105}></option>
              <option value={120}>
                120 <span>min</span>
              </option>
            </datalist>
          </div>
        </div>
        <div>
          <Button onClick={goToSetupTeam}>Next</Button>
        </div>
      </div>
    </OnBoardingTemplate>
  );
};

export default Instructions;
