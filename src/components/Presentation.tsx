import Button from "./ui/Button"
import Section from "./ui/Section"
import Text from "./ui/Text"

const Presentation = () => {
  return (
    <Section className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-2 mb-16">
        <Text type="h1" className="flex flex-wrap text-center">
          Ricardo Rodrigues
        </Text>
        <Text type="h3">Desenvolvedor fullstack</Text>
      </div>

      <Text type="p" className="w-[700px] max-w-full text-justify mb-10">
        Apaixonado por Javascript e desenvolvimento de aplicações. Gosto de
        solucionar problemas usando programação. Muito curioso, sempre estou
        rastreando as novas tecnologias na área.
      </Text>

      <Button variant="secondary">Entrar em contato</Button>
      <Button variant="plain">Ver mais</Button>
    </Section>
  )
}

export default Presentation