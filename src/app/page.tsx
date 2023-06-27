import Image from "next/image"

export default function Home() {
  return (
    <main className="overflow-hidden text-white">
      <Image 
      src="/Julia&Miłosz_672.jpg"
      alt="Zakochana para"
      fill={true}
      style={{objectFit: "cover", zIndex: -1}}
      />
      <div className="flex flex-col max-w-sm">
      <h1 className="text-6xl">Pierwszy Taniec Poznań</h1>
      <h5 className="text-3xl">ABY PIERWSZY TANIEC BYŁ DLA WAS PRZYGODĄ</h5>
      </div>
    </main>
  )
}
