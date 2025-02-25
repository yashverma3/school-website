import Navbar from "@/components/navbar";
import MainContent from "@/components/main-content";

export default function Home() {
  return (
    <div className="flex flex-col gap-7">
      <Navbar />
      <MainContent />
    </div>
  );
}