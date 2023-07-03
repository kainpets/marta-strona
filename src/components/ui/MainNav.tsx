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
          <div className="flex flex-row gap-2">
            <User2 />
            <Link href="/o-mnie">
              O mnie
            </Link>
          </div>
          <div className="flex flex-row gap-2">
            <Presentation />
            <Link href="/uslugi">
              Usługi
            </Link>
          </div>
          <div className="flex flex-row gap-2">
            <Album />
            <Link href="/portfolio">
              Portfolio
            </Link>
          </div>
          <div className="flex flex-row gap-2">
            <ClipboardCheck />
            <Link href="/opinie">
              Opinie
            </Link>
          </div>
          <div className="flex flex-row gap-2">
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