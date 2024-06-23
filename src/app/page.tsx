import Header from "@/components/Header";
import Presentation from "@/components/Presentation";

export default function Home() {
  return (
    <main className="flex bg-primary-600 bg-cover h-full p-4">
      <div className="flex flex-col h-full w-full md:px-4 bg-white md:bg-code overflow-auto rounded-lg relative">
        <Header className="sticky top-0" />

        <Presentation />
      </div>
    </main>
  );
}
