import InGamePopupTemplate from "templates/InGamePopupTemplate";
import SetupTeam from "templates/OnBoardingPopupTemplate/SetupTeam";

interface IProps {
  onSave?: () => void;
}

const SetupTeamPopup = ({ onSave }: IProps) => {
  return (
    <InGamePopupTemplate title="Your Team" subTitle="Setup your team">
      <SetupTeam onSave={onSave} />
    </InGamePopupTemplate>
  );
};

export default SetupTeamPopup;
