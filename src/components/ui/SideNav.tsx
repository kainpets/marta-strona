"use client"

import Link from 'next/link'
import Image from 'next/image'
import logoOtherPages from "/public/logoOtherPages.png"
import { Album, ClipboardCheck, PhoneOutgoing, Presentation, User2 } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './dropdown-menu'

function SideNav() {
  return (
    <div>
      <div className="flex px-4 justify-between text-black max-w-screen-2xl m-auto">
        <Link href="/" passHref>
          <Image
            src={logoOtherPages}
            placeholder='blur'
            className='hover:shadow-lg hover:shadow-black/30 transition duration-300 ease-in-out hover:scale-110'
            alt="Logo Pierwszy Taniec Poznań"
            style={{ borderRadius: "50%", maxWidth: "150px" }}
          />
        </Link>
        <nav>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link className="flex gap-2" href="/o-mnie">
                    <User2 />
                    O mnie
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="flex gap-2" href="/uslugi">
                    <Presentation />
                    Usługi
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="flex gap-2" href="/portfolio">
                    <Album />
                    Portfolio
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="flex gap-2" href="/opinie">
                    <ClipboardCheck />
                    Opinie
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="flex gap-2" href="/kontakt">
                    <PhoneOutgoing />
                    Kontakt
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden md:block md:w-auto">
            <li className='flex items-center px-4 justify-between gap-4'>
              <div className="hover:bg-slate-400 rounded-lg p-1 transition duration-300">
                <Link className="flex gap-2" href="/o-mnie">
                  <User2 />
                  O mnie
                </Link>
              </div>
              <div className="hover:bg-slate-400 rounded-lg p-1 transition duration-300">
                <Link className="flex gap-2" href="/uslugi">
                  <Presentation />
                  Usługi
                </Link>
              </div>
              <div className="hover:bg-slate-400 rounded-lg p-1 transition duration-300">
                <Link className="flex gap-2" href="/portfolio">
                  <Album />
                  Portfolio
                </Link>
              </div>
              <div className="hover:bg-slate-400 rounded-lg p-1 transition duration-300">
                <Link className="flex gap-2" href="/opinie">
                  <ClipboardCheck />
                  Opinie
                </Link>
              </div>
              <div className="hover:bg-slate-400 rounded-lg p-1 transition duration-300">
                <Link className="flex gap-2" href="/kontakt">
                  <PhoneOutgoing />
                  Kontakt
                </Link>
              </div>
            </li>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default SideNav