import { ButtonHTMLAttributes } from "react"

type ButtonProps = {
  variant?: "solid" | "outlined" | "plain" | "secondary"
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ variant = "solid", children, ...rest }: ButtonProps) => {

  const buttonSizeClass = () => {
    let className = "py-4 px-6 rounded hover:opacity-80 transition-opacity"

    return className
  }

  const buttonVariantClass = () => {
    let className = ""

    switch (variant) {
      case "outlined":
        className += "bg-transparent border-2 border-primary text-primary-800"
        break;
      case "plain":
        className += "bg-transparent border-0 text-primary-800"
        break;
      case "secondary":
        className += "bg-accent border-0 text-white"
        break;
      default:
        className += "bg-primary border-0 text-white"
        break;
    }

    return className
  }

  return (
    <button className={buttonVariantClass() + " " + buttonSizeClass()} {...rest}>
      {children}
    </button>
  )
}

export default Button