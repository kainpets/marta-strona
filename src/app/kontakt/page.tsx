import SideNav from "@/components/ui/SideNav"
import { FacebookIcon, Instagram, Mail, Phone, Youtube } from "lucide-react"
import Image from "next/image"
import marta from "/public/martakontakt.jpg"

function Kontakt() {
  return (
    <div className="bg-slate-200 w-screen min-h-screen">
      <main className="max-w-screen-2xl m-auto pt-16 px-16">
        <SideNav />
        <div className="flex gap-16 mx-auto w-full mt-16" style={{
          maxHeight: "60vh"
        }}>
          <div>
            <h2 className="text-3xl">KONTAKT</h2>
            <ul className="mt-4 flex flex-col gap-6">
              <li className="flex flex-row gap-2">
                <FacebookIcon color="#030099" />
                <a href="https://www.facebook.com/martaklisowskapierwszytaniec" target="_blank">@martaklisowskapierwszytaniec</a>
              </li>
              <li className="flex flex-row gap-2">
                <Instagram color="#d45125" />
                <a href="https://www.instagram.com/pierwszytaniecpoznan/" target="_blank">@pierwszytaniecpoznan</a>
              </li>
              <li className="flex flex-row gap-2">
                <Youtube color="#c70d00" />
                <a href="https://www.youtube.com/@martaklisowska2017" target="_blank">@martaklisowska2017</a>
              </li>
              <li className="flex flex-row gap-2">
                <Mail />
                <a href="mailto:klisowska.marta@gmail.com?subject=Zajęcia&body=Chcę wziąć udział w zajęciach">@klisowska.marta@gmail.com</a>
              </li>
              <li className="flex flex-row gap-2">
                <Phone />
                <p>+48 793 792 883</p>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <Image
              src={marta}
              placeholder="blur"
              alt="Uśmiechnięta Marta czeka na kontakt" style={{
                objectFit: "contain",
                width: "full",
                height: "full",
                maxHeight: "100%",
                maxWidth: "80%",
              }} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Kontakt