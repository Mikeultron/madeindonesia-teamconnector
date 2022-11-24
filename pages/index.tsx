import dynamic from "next/dynamic";

const HomeView = dynamic(() => import("views/Home"));

export default function HomePage() {
  return <HomeView />;
}
