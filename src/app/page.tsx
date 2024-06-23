import Main from "@/components/Main";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 justify-center items-center bg-primary bg-wallpapper bg-cover h-full p-8">
      <div className="flex flex-col items-center gap-2">
        <h1>Ricardo Rodrigues</h1>
        <p>Desenvolvedor Fullstack</p>
      </div>

      <Main />
    </main>
  );
}
