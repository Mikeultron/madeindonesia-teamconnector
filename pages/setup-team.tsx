import dynamic from "next/dynamic";

const SetupTeamView = dynamic(() => import("views/SetupTeam"), {
  ssr: false,
});

const SetupTeamPage = () => {
  return <SetupTeamView />;
};

export default SetupTeamPage;
