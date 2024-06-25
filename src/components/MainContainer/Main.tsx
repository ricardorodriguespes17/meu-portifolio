import classNames from "classnames"

export type MainProps = {
  children?: React.ReactNode
  grid?: boolean
  className?: string
}

const Main = ({ children, grid = true, className }: MainProps) => {
  let innerClassName = grid
    ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    : "flex flex-col"

  return (
    <div className={
      classNames(
        "justify-start items-center gap-x-24 bg-primary w-[850px] max-w-full h-[700px] md:h-[400px] max-h-full rounded-lg bg-opacity-70 backdrop-blur-sm py-2 px-6 overflow-auto",
        innerClassName,
        className
      )}>
      {children}
    </div>
  )
}

export default Main