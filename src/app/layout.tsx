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




const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <div className="flex items-center px-4 justify-between">
      <Image
      src="/../public/logoHomePage.png"
      width={250}
      height={250}
      alt="Logo Pierwszy Taniec Poznań"
    />
        <NavigationMenu>
          <NavigationMenuList >
            <NavigationMenuItem>
              <Link href="/o-mnie" legacyBehavior passHref>
                <NavigationMenuLink >
                  O mnie
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/uslugi" legacyBehavior passHref>
                <NavigationMenuLink>
                  Usługi
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/opinie" legacyBehavior passHref>
                <NavigationMenuLink>
                  Opinie
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/kontakt" legacyBehavior passHref>
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
