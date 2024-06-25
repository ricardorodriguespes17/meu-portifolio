import Main from "@/components/MainContainer/Main";
import ProfilePhoto from "@/components/ProfilePhoto";

export default function AboutPage() {
  return (
    <div className="relative mt-4 w-full flex items-center justify-center">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <ProfilePhoto />
      </div>
      <Main grid={false} className="pt-20 gap-4 *:text-justify md:*:text-lg">
        <p>Graduando em Ciência da Computação na Universidade Estadual do Sudoeste da Bahia (UESB).</p>
        <p>
          Estou em busca de novos desafios na área da programação, contribuindo
          cada vez mais para o avanço da tecnologia da informação, pois acredito
          que isso tende a mudar cada vez mais o mundo para melhor.
        </p>

        <p>
          <strong>Objetivo atual:</strong> Atuar como Desenvolvedor Fullstack / Front-end, com React.js ou outros frameworks javascript.
        </p>
      </Main>
    </div>
  );
}
