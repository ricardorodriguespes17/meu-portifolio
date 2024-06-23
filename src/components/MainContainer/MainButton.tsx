"use client";

import { useRouter } from "next/navigation";
import Icon from "../Icon"
import Button from "../ui/Button"

export type MainButtonProps = {
  label: string
  iconName: string
  navigateTo?: string
}

const MainButton = ({ label, iconName, navigateTo }: MainButtonProps) => {
  const router = useRouter()

  const onClick = () => {
    if(navigateTo)
      router.push(navigateTo)

  }

  return (
    <Button
      onClick={onClick}
      variant="plain"
      className="flex flex-col justify-center items-center gap-1 text-white hover:shadow-2xl hover:bg-primary/30"
    >
      <Icon className="text-5xl" name={iconName} />
      <strong className="text-inherit">{label}</strong>
    </Button>
  )
}

export default MainButton