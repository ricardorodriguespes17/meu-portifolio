import { IconType } from "react-icons"
import { BiLogoCPlusPlus, BiLogoPostgresql } from "react-icons/bi"
import { BsPersonVcard } from "react-icons/bs"
import { DiHaskell } from "react-icons/di"
import { FaAngular, FaCss3Alt, FaDocker, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { GoInfo } from "react-icons/go"
import { GrHomeRounded } from "react-icons/gr"
import { HiOutlineAcademicCap } from "react-icons/hi"
import { IoLogoFirebase, IoLogoJavascript, IoRocketOutline } from "react-icons/io5"
import { MdOutlineFeedback } from "react-icons/md"
import { RiContactsBook3Line, RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiKnexdotjs, SiNextdotjs, SiTypescript } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { VscProject } from "react-icons/vsc"

type IconProps = {
  name: string
  className?: string
}

const Icon = ({ name, className }: IconProps) => {

  const getIcon = () => {
    switch (name) {
      case "home":
        return GrHomeRounded
      case "rocket":
        return IoRocketOutline
      case "about":
        return BsPersonVcard
      case "academic":
        return HiOutlineAcademicCap
      case "contact":
        return RiContactsBook3Line
      case "info":
        return GoInfo
      case "github":
        return FiGithub
      case "projects":
        return VscProject
      case "feedback":
        return MdOutlineFeedback
      case "react":
        return FaReact
      case "html":
        return FaHtml5
      case "css":
        return FaCss3Alt
      case "angular":
        return FaAngular
      case "next":
        return SiNextdotjs
      case "javascript":
        return IoLogoJavascript
      case "node":
        return FaNodeJs
      case "java":
        return FaJava
      case "c++":
        return BiLogoCPlusPlus
      case "python":
        return FaPython
      case "firebase":
        return IoLogoFirebase
      case "postgres":
        return BiLogoPostgresql
      case "docker":
        return FaDocker
      case "haskell":
        return DiHaskell
      case "knex":
        return SiKnexdotjs
      case "express":
        return SiExpress
      case "typescript":
        return SiTypescript
      case "react-native":
        return TbBrandReactNative
      case "tailwind":
        return RiTailwindCssFill
      default:
        return null
    }
  }

  let SelectedIcon: IconType | null = getIcon()

  if(SelectedIcon)
    return <SelectedIcon className={className} />

  return <></>
}

export default Icon