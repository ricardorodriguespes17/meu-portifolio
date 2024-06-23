import { ButtonHTMLAttributes } from "react"

type ButtonProps = {
  variant?: "solid" | "outlined" | "plain" | "secondary"
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ variant = "solid", className, children, ...rest }: ButtonProps) => {

  const buttonSizeClass = () => {
    return "py-4 px-6 rounded-lg transtion-all duration-500 hover:font-bold "
  }

  const buttonVariantClass = () => {
    let className = ""

    switch (variant) {
      case "outlined":
        className += "bg-transparent border-2 border-primary text-primary"
        break;
      case "plain":
        className += "bg-transparent border-0 text-primary"
        break;
      case "secondary":
        className += "bg-accent border-0 text-white hover:shadow-lg"
        break;
      default:
        className += "bg-primary border-0 text-white"
        break;
    }

    return className
  }

  return (
    <button
      className={buttonVariantClass() + " " + buttonSizeClass() + " " + className}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button