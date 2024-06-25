import Icon from "@/components/Icon"
import Main from "@/components/MainContainer"

type ContainerProps = {
  name: string
  skills: SkillProps[]
}

type SkillProps = {
  name: string
  icon?: string
  link?: string
}

const SkillsPage = () => {
  const containers: ContainerProps[] = [
    {
      name: "Frontend", skills: [
        { name: "React.js", icon: "react", link: "https://react.dev" },
        { name: "HTML", icon: "html", link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" },
        { name: "CSS", icon: "css", link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
        { name: "Javascript", icon: "javascript", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
        { name: "Typescript", icon: "typescript", link: "https://www.typescriptlang.org" },
        { name: "Next.js", icon: "next", link: "https://nextjs.org" },
        { name: "Tailwind", icon: "tailwind", link: "https://tailwindcss.com" },
        { name: "Angular.js", icon: "angular", link: "https://angularjs.org" },
        { name: "Native", icon: "react-native", link: "https://reactnative.dev" },
      ]
    },
    {
      name: "Backend", skills: [
        { name: "Node.js", icon: "node", link: "https://nodejs.org" },
        { name: "Express", icon: "express", link: "https://expressjs.com" },
        { name: "Firebase", icon: "firebase", link: "https://firebase.google.com" },
        { name: "Java", icon: "java", link: "https://www.java.com" },
        { name: "Knex", icon: "knex", link: "https://knexjs.org" },
        { name: "PostgreSQL", icon: "postgres", link: "https://www.postgresql.org" },
      ]
    },
    {
      name: "Outros", skills: [
        { name: "Python", icon: "python", link: "https://www.python.org" },
        { name: "C++", icon: "c++" },
        { name: "Docker", icon: "docker", link: "https://www.docker.com" },
        { name: "Haskell", icon: "haskell", link: "https://www.haskell.org" },
      ]
    },
  ]

  const renderIconAndNameSkill = (skill: SkillProps) => {
    return (
      <div className="flex flex-col items-center justify-center">
        {skill.icon && <Icon className="text-4xl" name={skill.icon} />}
        <p className="text-md md:text-lg w-[100px]">{skill.name}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col max-h-screen gap-8 overflow-auto">
      <h1>Habilidades</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 h-fit pb-2 max-w-full justify-items-center gap-6 text-white">
        {containers.map(item => (
          <Main grid={false} className="flex-nowrap w-[400px] flex-col pt-4 pb-8 group">
            <h2 className="mb-6 text-white drop-shadow-md group-hover:drop-shadow-xl group-hover:text-secondary">
              {item.name}
            </h2>

            <div className="grid grid-cols-3 gap-8">
              {item.skills.map(skill => {
                if (skill.link) {
                  return (
                    <a href={skill.link} target="_blank">
                      {renderIconAndNameSkill(skill)}
                    </a>
                  )
                }
                return renderIconAndNameSkill(skill)
              })}
            </div>
          </Main>
        ))}
      </div>
    </div>
  )
}

export default SkillsPage