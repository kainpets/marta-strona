import Image from "next/image"

function OMnie() {
  return (
    <main>
      <div className="flex flex-row gap-8" style={{ maxHeight:"60vh", position: 'relative'}}>
        <Image src="/../public/martazkciukami.JPG" width={500} height={500} style={{height: "auto", maxWidth:"50%", maxHeight: "100%"}}  alt="Uśmiechnięta Marta z dwoma kciukami w górze" />
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl">Cześć!</h2>
          <h2 className="text-2xl">Mam na imię Marta i jestem <br/>instruktorką tańca.</h2>
          <p className="text-justify">Uczę tańca i bardzo to kocham.
            <br/>
            Tańczę od 7 roku życia. Zaczynałam w ukochanym, rodzinnym Gorzowie Wielkopolskim, gdzie przez 12 lat rozwijałam taniec współczesny pod okiem Pana Adama Węsławskiego, który na zawsze będzie moim najważniejszym nauczycielem tańca.
            <br/>
            Taneczna droga zaprowadziła mnie do tańca w parze. Zaczynałam od salsy kubańskiej, potem nadszedł czas zouka
            i west coast swinga. Intensywnie spełniam się także w high heels.
            <br/>
            Pierwszy taniec znalazł mnie przypadkiem, a ja oddałam mu serce! Kilkoro znajomych zwróciło się do mnie z prośbą o pomoc w przygotowaniach do pierwszego tańca weselnego. W uczeniu tańca ślubnego odkryłam swoje nowe powołanie!
            <br/>
            Przygotowuję około 25 par rocznie do pierwszego tańca. Mam ogromne szczęście trafiać na wspaniałych ludzi! </p>
        </div>
      </div>
    </main>
  )
}

export default OMnie