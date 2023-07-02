import SideNav from "@/components/ui/SideNav"
import Image from "next/image"
import Link from "next/link"

function Uslugi() {
  return (
    <div className="bg-slate-200 w-screen min-h-screen ">
    <main className="max-w-screen-2xl m-auto pt-16 px-16 ">
      <SideNav />
      <div className="flex flex-row gap-8">
        <div>
          <Image src="/martanogadogory.JPG" alt="Marta tańczy z nogą uniesioną do góry" width={200} height={200} />
          <h2>WARSZTATY TANECZNE</h2>
          <p>Prowadzę zajęcia taneczne na eventach, warsztaty dla osób początkujących oraz tancerzy. Zapraszam na grupowe zajęcia taneczne dla wszystkich grup zaawansowania. </p>
        </div>
        <div>
          <Image src="/martaradzi.JPG" alt="Marta tańczy z nogą uniesioną do góry" width={200} height={200} />
          <h2>PIERWSZY TANIEC</h2>
          <p>Pierwszy taniec to głównie lekcje indywidualne dla par młodych. Zaczynamy od podstawowych kroków tańca użytkowego, potem przechodzimy do przygotowanej dla Was choreografii. </p>
        </div>
        <div>
          <Image src="/martalabedz.JPG" alt="Marta tańczy z nogą uniesioną do góry" width={200} height={200} />
          <h2>TANIEC DLA KOBIET</h2>
          <p>Zajęcia pełne kobiecości, na których każda z Was może poczuć się jak gwiazda Broadway&apos;u. Prowadzę zajęcia grupowe i indywidualne. Realizuję też tańce na wieczorach panieńskich.</p>
        </div>
      </div>
      <h3 className="text-bold">Chcesz dowiedzieć się więcej? <Link href="/kontakt">Zadzwoń</Link></h3>
    </main>
    </div>
  )
}

export default Uslugi