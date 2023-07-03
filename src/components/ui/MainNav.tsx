import Link from "next/link"
import Image from "next/image"
import logoHomePage from "/public/logoHomePage.png"
import { Album, ClipboardCheck, PhoneOutgoing, Presentation, User2 } from "lucide-react"

function MainNav() {
  return (
    <div className="flex flex-row justify-between text-white">
      <Image
        src={logoHomePage}
        placeholder="blur"
        alt="Logo Pierwszy Taniec Poznań"
        style={{ borderRadius: "50%", flexShrink: "0", maxWidth: "200px" }}
      />
      <nav>
        <li className='flex items-center px-4 justify-between gap-6 text-xl'>
          <div className="flex flex-row gap-2 hover:bg-slate-600 rounded-lg px-1 transition duration-300">
            <User2 />
            <Link href="/o-mnie">
              O mnie
            </Link>
          </div>
          <div className="flex flex-row gap-2 hover:bg-slate-600 rounded-lg p-1 transition duration-300">
            <Presentation/>
            <Link href="/uslugi">
              Usługi
            </Link>
          </div>
          <div className="flex flex-row gap-2 hover:bg-slate-600 rounded-lg p-1 transition duration-300">
            <Album />
            <Link href="/portfolio">
              Portfolio
            </Link>
          </div>
          <div className="flex flex-row gap-2 hover:bg-slate-600 rounded-lg p-1 transition duration-300">
            <ClipboardCheck />
            <Link href="/opinie">
              Opinie
            </Link>
          </div>
          <div className="flex flex-row gap-2 hover:bg-slate-600 rounded-lg p-1 transition duration-300">
            <PhoneOutgoing />
            <Link href="/kontakt">
              Kontakt
            </Link>
          </div>
        </li>
      </nav>
    </div>
  )
}

export default MainNav