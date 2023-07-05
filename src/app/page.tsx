import MainNav from "@/components/ui/MainNav"
import Image from "next/image"
import juliaMilosz from "/public/Julia&Miłosz_672.jpg"
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <>
      <main className="relative w-screen h-screen overflow-hidden text-white" >
        <Image
          src={juliaMilosz}
          alt="Zakochana para weselna"
          fill={true}
          priority
          quality={100}
          sizes="100vw"
          placeholder="blur"
          style={{ objectFit: "cover", zIndex: -1, }}
        />
        <div className="max-w-screen-2xl px-16 pt-16  m-auto">
          <MainNav />
          <div className="flex flex-col max-w-sm">
            <h1 className="text-6xl leading-relaxed font-bold">Pierwszy Taniec Poznań</h1>
            <h5 className="text-3xl leading-snug">ABY PIERWSZY TANIEC <br></br> BYŁ DLA WAS PRZYGODĄ</h5>
          </div>
        </div>
      </main>
      <Analytics />
    </>
  )
}
