"use client"
import { usePathname } from "next/navigation"
import Main from "./MainContainer"
import classNames from "classnames"

const ToolBar = () => {
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

  if (pathname === "/") {
    return <></>
  }

  return (
    <div className="flex bg-black w-full h-16 gap-2 fixed bottom-0">
      <Main.Button iconName="home" navigateTo="/" className="sticky left-0 hover:text-accent" />

      <div className="flex justify-center w-full overflow-auto pl-96 md:p-0">
        {buttons
          .filter(item => item.path !== "/")
          .map(item => (
            <Main.Button
              navigateTo={item.path}
              title={item.title}
              iconName={item.iconName}
              className={classNames(item.path === pathname && "!text-accent", "hover:text-accent")}
            />
          ))}
      </div>
    </div>
  )
}

export default ToolBar