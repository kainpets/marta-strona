import Link from "next/link"
import Image from "next/image"
import logoHomePage from "/public/logoHomePage.png"
import { Album, ClipboardCheck, PhoneOutgoing, Presentation, User2 } from "lucide-react"

function MainNav() {
  return (
    <div className="flex flex-row justify-between text-white">
      <Image
      className="w-[100px] md:w-[200px]"
        src={logoHomePage}
        placeholder="blur"
        alt="Logo Pierwszy Taniec Poznań"
        style={{ borderRadius: "50%", flexShrink: "0", }}
      />
      <nav>
        <li className='flex items-center px-4 justify-between gap-6 text-xl'>
          <div className="hover:bg-slate-600 rounded-lg px-1 transition duration-300">
            <Link className="flex gap-2" href="/o-mnie">
            <User2 />
              O mnie
            </Link>
          </div>
          <div className="hover:bg-slate-600 rounded-lg p-1 transition duration-300">
            <Link className="flex gap-2" href="/uslugi">
            <Presentation/>
              Usługi
            </Link>
          </div>
          <div className="hover:bg-slate-600 rounded-lg p-1 transition duration-300">
            <Link className="flex gap-2" href="/portfolio">
            <Album />
              Portfolio
            </Link>
          </div>
          <div className="hover:bg-slate-600 rounded-lg p-1 transition duration-300">
            <Link className="flex gap-2" href="/opinie">
            <ClipboardCheck />
              Opinie
            </Link>
          </div>
          <div className="hover:bg-slate-600 rounded-lg p-1 transition duration-300">
            <Link className="flex gap-2" href="/kontakt">
            <PhoneOutgoing />
              Kontakt
            </Link>
          </div>
        </li>
      </nav>
    </div>
  )
}

export default MainNav