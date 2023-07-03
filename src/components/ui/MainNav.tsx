import Link from "next/link"
import Image from "next/image"
import logoHomePage from "/public/logoHomePage.png"

function MainNav() {
  return (
    <div className="flex flex-row justify-between text-white">
        <Image
          src={logoHomePage}
          placeholder="blur"
          alt="Logo Pierwszy Taniec Poznań"
          style={{ borderRadius: "50%", flexShrink: "0", maxWidth: "200px"}}
        />
      <nav>
        <li className='flex items-center px-4 justify-between gap-6 text-xl'>
          <div>
            <Link href="/o-mnie">
              O mnie
            </Link>
          </div>
          <div>
            <Link href="/uslugi">
              Usługi
            </Link>
          </div>
          <div>
            <Link href="/portfolio">
              Portfolio
            </Link>
          </div>
          <div>
            <Link href="/opinie">
              Opinie
            </Link>
          </div>
          <div>
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