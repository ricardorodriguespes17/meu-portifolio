type CardProps = {
  children?: React.ReactNode
  className?: string
  direction?: "vertical" | "horizontal"
}

const Card = ({ children, className, direction = "horizontal" }: CardProps) => {
  return (
    <div className={`bg-white rounded-xl flex p-3 ${direction === "vertical" && "flex-col"} ${className}`}>
      {children}
    </div>
  )
}

export default Card;