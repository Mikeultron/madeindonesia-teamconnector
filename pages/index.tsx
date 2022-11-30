import dynamic from "next/dynamic";

const InstructionsView = dynamic(() => import("views/Instructions"), {
  ssr: false,
});

export default function InstructionsPage() {
  return <InstructionsView />;
}
