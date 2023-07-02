import MainNav from "@/components/ui/MainNav"
import Image from "next/image"
import juliaMilosz from "/public/Julia&Miłosz_672.jpg"

export default function Home() {
  return (
    <main className="overflow-hidden text-white px-16 pt-16 max-w-screen-2xl m-auto">
      <Image
        src={juliaMilosz}
        alt="Zakochana para"
        fill={true}
        priority
        quality={100}
        placeholder="blur"
        style={{ objectFit: "cover", zIndex: -1, width: "100%", height: "100%" }}
      />
      <MainNav />
      <div className="flex flex-col max-w-sm ">
        <h1 className="text-6xl leading-relaxed font-bold">Pierwszy Taniec Poznań</h1>
        <h5 className="text-3xl leading-snug">ABY PIERWSZY TANIEC <br></br> BYŁ DLA WAS PRZYGODĄ</h5>
      </div>
    </main>
  )
}
