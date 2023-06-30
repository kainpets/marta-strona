import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Pierwszy Taniec Poznań',
  description: 'Strona Marty Klisowskiej dla par przygotwujących się do pierwszego tańca',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        <div className="flex flex-row items-center px-4 justify-between text-white">
          <Link href="/" passHref>
            <Image
              src="/logoHomePage.png"
              width={200}
              height={200}
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
        {children}
      </body>
    </html>
  )
}
