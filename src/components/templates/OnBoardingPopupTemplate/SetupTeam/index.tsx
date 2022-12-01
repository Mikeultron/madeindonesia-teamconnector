import Button from "atoms/Button";
import { ChangeEvent, useState } from "react";
import { ITeamData } from "src/utils/interfaces";
import Input from "./components/Input";
import InputAdd from "./components/InputAdd";
import styles from "./styles.module.scss";

interface IProps {
  onSave?(data: ITeamData): void;
}

const SetupTeam = ({ onSave }: IProps) => {
  const [teamName, setTeamName] = useState("");
  const [teamMembers, _setTeamMembers] = useState([]);

  const handleChangeTeamName = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const handleOnSave = () => {
    if (onSave) {
      onSave({
        teamName,
        teamMembers,
      });
    }
  };
  return (
    <div className={styles.container}>
      <p>
        Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin
        porta est convallis lacus blandit
      </p>
      <div className={styles.inputs}>
        <Input
          onChange={handleChangeTeamName}
          label="Team name"
          placeholder="Team Name"
        />
        <InputAdd label="Team members" placeholder="Team Members" />
      </div>
      <div>
        <Button onClick={handleOnSave}>Save</Button>
      </div>
    </div>
  );
};

export default SetupTeam;
