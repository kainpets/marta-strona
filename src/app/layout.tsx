import './globals.css'
import { Inter } from 'next/font/google'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
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
      <body>
        <div className="flex items-center px-4 justify-between text-white">
          <Link href="/">
      <Image
      src="/logoHomePage.png"
      width={200}
      height={200}
      alt="Logo Pierwszy Taniec Poznań"
      style={{borderRadius: "50%"}}
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
