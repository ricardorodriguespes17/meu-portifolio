type SectionProps = {
  children?: React.ReactNode
  className?: string
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={`w-full p-10 ${className}`}>
      {children}
    </section>
  )
}

export default Section