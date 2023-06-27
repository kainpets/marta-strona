import '../globals.css'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
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
    <html lang="en">
      <body className='bg-slate-200'>
        <div className="flex items-center px-4 justify-between text-black">
          <Link href="/" passHref>
            <Image
              src="/logoOtherPages.png"
              width={175}
              height={175}
              alt="Logo Pierwszy Taniec Poznań"
              style={{ borderRadius: "50%" }}
            />
          </Link>
          <NavigationMenu>
            <NavigationMenuList >
              <NavigationMenuItem>
                <Link href="/o-mnie" passHref>
                  <NavigationMenuLink >
                    O mnie
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/uslugi" passHref>
                  <NavigationMenuLink>
                    Usługi
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/portfolio" passHref>
                  <NavigationMenuLink>
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/opinie" passHref>
                  <NavigationMenuLink>
                    Opinie
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/kontakt" passHref>
                  <NavigationMenuLink>
                    Kontakt
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {children}
      </body>
    </html>
  )
}
