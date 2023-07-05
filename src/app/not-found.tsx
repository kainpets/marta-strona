import SideNav from "@/components/ui/SideNav"
import { Frown } from "lucide-react"

function NotFound() {
  return (
    <main className="max-w-screen-2xl m-auto pt-16 px-16">
      <SideNav />
      <div className="pt-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl" >Nie znaleziono takiej strony</h1>
        <Frown size={48} />
      </div>
    </main>
  )
}

export default NotFound