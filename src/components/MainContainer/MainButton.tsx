"use client";
import { useRouter } from "next/navigation";
import Icon from "../Icon"
import Button from "../ui/Button"
import classNames from "classnames";

export type MainButtonProps = {
  iconName: string
  label?: string
  navigateTo?: string
  className?: string
  title?: string
}

const MainButton = ({ label, title, iconName, navigateTo, className }: MainButtonProps) => {
  const router = useRouter()

  const onClick = () => {
    if (navigateTo)
      router.push(navigateTo)
  }

  return (
    <Button
      variant="plain"
      title={title}
      className={classNames("flex flex-col justify-center items-center gap-1 text-white hover:shadow-2xl hover:bg-primary/30", className)}
      onClick={onClick}
    >
      <Icon className="text-5xl" name={iconName} />
      <strong className="text-inherit">{label}</strong>
    </Button>
  )
}

export default MainButton