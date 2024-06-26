import Main from "@/components/MainContainer"
import Timeline from "@/components/Timeline"

const Formation = () => {
  const academicFormation = [
    { title: "Técnico em Informática - IFNMG", period: "2014 - 2018" },
    { title: "Ciência da Computação - UESB", period: "2017 - atual" }
  ]

  const courses = [
    { title: "Curso de Javascript - Udemy", period: "2019" },
    { title: "Curso de Python - Udemy", period: "2019" },
    { title: "Curso de React Native - Udemy", period: "2019" },
    { title: "Curso de Ionic - Udemy", period: "2022" },
    { title: "Curso de Design Patterns - Udemy", period: "2023" },
    { title: "Curso de Inglês - KNN", period: "2023 - atual" }
  ]

  return (
    <div className="flex flex-col items-center flex-1 w-full max-h-screen overflow-auto">
      <h1 className="mb-8">Formação</h1>

      <Main grid={false} className="h-full w-full mb-4 justify-center items-center md:gap-12">
        <Timeline prefix sufix timePoints={courses} />
      </Main>
    </div>
  )
}

export default Formation