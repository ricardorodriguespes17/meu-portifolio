"use client"
import { usePathname } from "next/navigation"
import Main from "./MainContainer"

type ToolBarProps = {

}

const ToolBar = ({ }: ToolBarProps) => {
  const pathname = usePathname();

  const buttons = [
    { path: "/", title: "Início", iconName: "home" },
    { path: "/about", title: "Sobre", iconName: "about" },
    { path: "/skills", title: "Habilidades", iconName: "rocket" },
    { path: "/formation", title: "Formação", iconName: "academic" },
    { path: "/projects", title: "Projetos", iconName: "projects" },
    { path: "/contacts", title: "Contatos", iconName: "contact" },
    { path: "/github", title: "Github", iconName: "github" },
    { path: "/github", title: "Site", iconName: "info" },
    { path: "/feedback", title: "Feedback", iconName: "feedback" },
  ]

  if(pathname === "/") {
    return <></>
  }

  return (
    <div className="flex bg-black w-full h-16 gap-2">
      <Main.Button iconName="home" navigateTo="/" />

      <div className="flex justify-center flex-1 overflow-auto pl-4">
        {buttons
          .filter(item => item.path !== pathname && item.path !== "/")
          .map(item => (
            <Main.Button
              navigateTo={item.path}
              title={item.title}
              iconName={item.iconName}
            />
          ))}
      </div>
    </div>
  )
}

export default ToolBar