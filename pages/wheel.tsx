import dynamic from "next/dynamic";

const WheelView = dynamic(() => import("views/Wheel"), {
  ssr: false,
});

const WheelPage = () => {
  return <WheelView />;
};

export default WheelPage;
