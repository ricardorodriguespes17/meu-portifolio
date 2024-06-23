import MainButton from "./MainButton"

const Main = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-center gap-x-24 bg-primary w-[850px] max-w-full h-[700px] md:h-[400px] max-h-full rounded-lg bg-opacity-70 backdrop-blur-sm py-2 px-6 overflow-auto">
      <MainButton label="Sobre" iconName="about" />
      <MainButton label="Habilidades" iconName="rocket" />
      <MainButton label="Formação" iconName="academic" />
      <MainButton label="Contatos" iconName="contact" />
      <MainButton label="Projetos" iconName="projects" />
      <MainButton label="Github" iconName="github" />
      <MainButton label="Site" iconName="info" />
      <MainButton label="Feedback" iconName="feedback" />
    </div>
  )
}

export default Main