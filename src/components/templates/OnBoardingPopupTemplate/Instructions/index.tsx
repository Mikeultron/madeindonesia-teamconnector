import Button from "atoms/Button";
import InstructionsBulletList from "atoms/InstructionsBulletList";
import styles from "./styles.module.scss";

interface IProps {
  onClick: () => void;
}

const Instructions = ({ onClick }: IProps) => {
  return (
    <div className={styles.intro}>
      <InstructionsBulletList />
      <div className={styles.info}>
        <p>
          A session of TeamConnector may require <span>± 60 minutes</span> to
          finish.
        </p>
        <div className={styles.sliderContainer}>
          <input
            type="range"
            min={15}
            defaultValue={60}
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
        <Button onClick={onClick}>Next</Button>
      </div>
    </div>
  );
};

export default Instructions;
