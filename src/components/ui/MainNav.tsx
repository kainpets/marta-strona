"use client"

import Link from "next/link"
import Image from "next/image"
import logoHomePage from "/public/logoHomePage.png"
import { Album, ClipboardCheck, Menu, PhoneOutgoing, Presentation, User2 } from "lucide-react"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function MainNav() {
  return (
    <div className="flex flex-row justify-between text-white">
      <Image
        className="w-[100px] md:w-[200px] transition-all"
        src={logoHomePage}
        placeholder="blur"
        alt="Logo Pierwszy Taniec Poznań"
        style={{ borderRadius: "50%", flexShrink: "0", }}
      />
      <nav>
        <div className="md:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <div className="text-black flex gap-1 ">
                    <Menu />
                    Menu
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href="/o-mnie" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <User2 />
                      O mnie
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/uslugi" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Presentation />
                      Usługi
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/portfolio" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Album />
                      Portfolio
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/opinie" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <ClipboardCheck />
                      Opinie
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/kontakt" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <PhoneOutgoing />
                      Kontakt
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:block md:w-auto lg:text-xl md:text-sm">
          <li className='flex items-center px-4 justify-between gap-6 '>
            <div className="hover:bg-slate-600 rounded-lg px-1 transition duration-300">
              <Link className="flex gap-2" href="/o-mnie">
                <User2 />
                O mnie
              </Link>
            </div>
            <div className="hover:bg-slate-600 rounded-lg p-1 transition duration-300">
              <Link className="flex gap-2" href="/uslugi">
                <Presentation />
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
        </div>
      </nav>
    </div>
  )
}

export default MainNav