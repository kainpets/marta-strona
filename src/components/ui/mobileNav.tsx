"use client"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, User2, Presentation, Album, ClipboardCheck, PhoneOutgoing } from "lucide-react"
import Link from "next/link"


function MobileNav() {
  return (
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
  )
}

export default MobileNav