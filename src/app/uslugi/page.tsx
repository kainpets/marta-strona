import SideNav from "@/components/ui/SideNav"
import Image from "next/image"
import Link from "next/link"
import martalabedz from "/public/martalabedz.jpg"
import martaradzi from "/public/martaradzi.jpg"
import martanogadogory from "/public/martanogadogory.jpg"


function Uslugi() {
  return (
    <div className="bg-slate-200 w-screen min-h-screen">
      <main className="max-w-screen-2xl m-auto pt-16 px-16">
        <SideNav />
        <div style={{
          display: "grid",
          gridGap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, auto))",
          paddingTop: "4rem",
          alignItems: "baseline",
        }}>
          <div style={{ position: "relative", height: "625px" }}>
            <Image src={martanogadogory} alt="Marta tańczy z nogą uniesioną do góry" className="shadow" placeholder="blur" sizes="100vw" style={{
              objectFit: "cover",
              width: "100%",
              height: "70%"
            }} />
            <div className="pt-4">
              <h2>WARSZTATY TANECZNE</h2>
              <p className="text-justify">Prowadzę zajęcia taneczne na eventach, warsztaty dla osób początkujących oraz tancerzy. Zapraszam na grupowe zajęcia taneczne dla wszystkich grup zaawansowania. </p>
            </div>
          </div>
          <div style={{ position: "relative", height: "625px" }}>
            <Image src={martaradzi} alt="Para tańczy na pierwszym planie, Marta doradza w tle" className="shadow" placeholder="blur" sizes="100vw" style={{
              objectFit: "cover",
              width: "100%",
              height: "70%"
            }} />
            <div className="pt-4">
              <h2>PIERWSZY TANIEC</h2>
              <p className="text-justify">Pierwszy taniec to głównie lekcje indywidualne dla par młodych. Zaczynamy od podstawowych kroków tańca użytkowego, potem przechodzimy do przygotowanej dla Was choreografii. </p>
            </div>
          </div>
          <div style={{ position: "relative", height: "625px" }}>
            <Image src={martalabedz} alt="Marta tańczy we wdzięcznej pozie" className="shadow" placeholder="blur" sizes="100vw" style={{
              objectFit: "cover",
              width: "100%",
              height: "70%"
            }} />
            <div className="pt-4">
              <h2>TANIEC DLA KOBIET</h2>
              <p className="text-justify">Zajęcia pełne kobiecości, na których każda z Was może poczuć się jak gwiazda Broadway&apos;u. Prowadzę zajęcia grupowe i indywidualne. Realizuję też tańce na wieczorach panieńskich.</p>
            </div>
          </div>
        </div>
        <div className="marginx-auto w-full text-center">
          <h3 >Chcesz dowiedzieć się więcej? <Link href="/kontakt" className="font-bold">Zadzwoń!</Link></h3>
        </div>
      </main>
    </div>
  )
}

export default Uslugi