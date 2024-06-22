type TextProps = {
  type?: "h1" | "h2" | "h3" | "p" | "label"
  children?: React.ReactNode
  className?: string
}

const Text = ({ type, className, children }: TextProps) => {
  switch (type) {
    case "h1":
      return <h1 className={className}>{children}</h1>
    case "h2":
      return <h2 className={className}>{children}</h2>
    case "h3":
      return <h3 className={className}>{children}</h3>
    case "label":
      return <label className={className}>{children}</label>
    default:
      return <p className={className}>{children}</p>
  }
}

export default Text;