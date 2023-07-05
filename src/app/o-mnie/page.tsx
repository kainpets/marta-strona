import Image from "next/image"
import martaKciuki from "/public/martazkciukami.jpg"

function OMnie() {
  return (
    <main className="max-w-screen-2xl m-auto pt-4">
      <div className="flex flex-col gap-4 sm:flex-row pt-16" style={{ maxHeight: "60vh" }}>
        <Image src={martaKciuki} placeholder="blur" style={{ height: "auto", maxWidth: "50%", maxHeight: "100%"}} className="rounded object-scale-down" alt="Uśmiechnięta Marta z dwoma kciukami w górze" />
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl">Cześć!</h2>
          <h2 className="text-2xl">Mam na imię Marta i jestem <br />instruktorką tańca.</h2>
          <p>Uczę tańca i bardzo to kocham.</p>
          <br className="md:hidden"/>
          <p>
            Tańczę od 7 roku życia. Zaczynałam w ukochanym, rodzinnym Gorzowie Wielkopolskim, gdzie przez 12 lat rozwijałam taniec współczesny pod okiem Pana Adama Węsławskiego, który na zawsze będzie moim najważniejszym nauczycielem tańca.
          </p>
          <br className="md:hidden"/>
          <p>
            Taneczna droga zaprowadziła mnie do tańca w parze. Zaczynałam od salsy kubańskiej, potem nadszedł czas zouka
            i west coast swinga. Intensywnie spełniam się także w high heels.
          </p>
          <br className="md:hidden"/>
          <p>
            Pierwszy taniec znalazł mnie przypadkiem, a ja oddałam mu serce! Kilkoro znajomych zwróciło się do mnie z prośbą o pomoc w przygotowaniach do pierwszego tańca weselnego. W uczeniu tańca ślubnego odkryłam swoje nowe powołanie!
          </p>
          <br className="md:hidden"/>
          <p>
            Przygotowuję około 25 par rocznie do pierwszego tańca. Mam ogromne szczęście trafiać na wspaniałych ludzi! </p>
        </div>
      </div>
    </main>
  )
}

export default OMnie