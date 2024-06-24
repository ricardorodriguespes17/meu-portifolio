import { IconType } from "react-icons"
import { BsPersonVcard } from "react-icons/bs"
import { FiGithub } from "react-icons/fi"
import { GoInfo } from "react-icons/go"
import { GrHomeRounded } from "react-icons/gr"
import { HiOutlineAcademicCap } from "react-icons/hi"
import { IoRocketOutline } from "react-icons/io5"
import { MdOutlineFeedback } from "react-icons/md"
import { RiContactsBook3Line } from "react-icons/ri"
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