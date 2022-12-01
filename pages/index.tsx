import dynamic from "next/dynamic";

const WheelView = dynamic(() => import("views/Wheel"), {
  ssr: false,
});

export default function WheelPage() {
  return <WheelView />;
}
