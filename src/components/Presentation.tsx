import Button from "./ui/Button"
import Section from "./ui/Section"
import Text from "./ui/Text"

const Presentation = () => {
  return (
    <Section className="flex flex-col items-center md:items-start">
      <div className="flex flex-col gap-2 mb-16">
        <Text type="h1" className="flex flex-wrap text-center md:items-start mb-1">
          Ricardo Rodrigues
        </Text>
        <Text type="h3" className="text-center md:text-start">Desenvolvedor Fullstack</Text>
      </div>

      <Text className="w-[700px] max-w-full text-justify">
        Sou um profissional proativo, versátil, comunicativo, tenho facilidade para aprender novas tecnologias e um bom raciocínio lógico para solucionar problemas.
        Apaixonado por <strong>Javascript</strong>, mas gosto de me aventurar em outras linguagens, sendo curioso e aprendendo bastante com as diversas formas de resolver problemas.
      </Text>

      <div className="flex flex-col w-[200px] max-w-full">
        <Button className="mt-10" variant="secondary">Entrar em contato</Button>
        <Button variant="plain">Ver mais</Button>
      </div>
    </Section>
  )
}

export default Presentation