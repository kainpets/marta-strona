import Link from 'next/link'
import Image from 'next/image'

function SideNav() {
  return (
    <div>
      <div className="flex px-4 justify-between text-black max-w-screen-2xl m-auto">
        <Link href="/" passHref>
          <Image
            src="/logoOtherPages.png"
            width={175}
            height={175}
            alt="Logo Pierwszy Taniec Poznań"
            style={{ borderRadius: "50%" }}
          />
        </Link>
        <nav>
          <li className='flex items-center px-4 justify-between gap-4'>
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
    </div>
  )
}

export default SideNav