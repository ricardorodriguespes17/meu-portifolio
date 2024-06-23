import Icon from "./Icon"
import Button from "./ui/Button"

type MainButtonProps = {
  label: string
  iconName: string
}

const MainButton = ({ label, iconName }: MainButtonProps) => {
  return (
    <Button variant="plain" className="flex flex-col justify-center items-center gap-1 text-white hover:shadow-2xl hover:bg-primary/30">
      <Icon className="text-5xl" name={iconName} />
      <strong className="text-inherit">{label}</strong>
    </Button>
  )
}

export default MainButton