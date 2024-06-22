import Header from "@/components/Header";
import Presentation from "@/components/Presentation";

export default function Home() {
  return (
    <main className="flex bg-primary-100 h-full p-3">
      <div className="flex flex-col h-full w-full md:px-4 bg-white overflow-auto rounded-lg relative">
        <Header className="sticky top-0" />

        <Presentation />
      </div>
    </main>
  );
}
