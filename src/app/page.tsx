import Main from "@/components/MainContainer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-2 mb-8">
        <h1>Ricardo Rodrigues</h1>
        <p>Desenvolvedor Fullstack</p>
      </div>

      <Main className="!py-12">
        <Main.Button navigateTo="/about" label="Sobre" iconName="about" />
        <Main.Button navigateTo="/skills" label="Habilidades" iconName="rocket" />
        <Main.Button navigateTo="/formation" label="Formação" iconName="academic" />
        <Main.Button navigateTo="/projects" label="Projetos" iconName="projects" />
        <Main.Button navigateTo="/contacts" label="Contatos" iconName="contact" />
        <Main.Button navigateTo="/github" label="Github" iconName="github" />
        <Main.Button navigateTo="/site" label="Site" iconName="info" />
        <Main.Button navigateTo="/feedback" label="Feedback" iconName="feedback" />
      </Main>
    </>
  );
}
