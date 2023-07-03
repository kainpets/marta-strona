import SideNav from "@/components/ui/SideNav"

function Kontakt() {
  return (

    <div className="bg-slate-200 w-screen min-h-screen">
      <main className="max-w-screen-2xl m-auto pt-16 px-16">
      <SideNav />
      <div>
        <div >
          <h2 className="text-3xl">KONTAKT</h2>
          <ul className="mt-4 flex flex-col gap-6">
            <li>
              <a target="_blank">@martaklisowskapierwszytaniec</a>
            </li>
            <li>
              <a target="_blank">@pierwszytaniecpoznan</a>
            </li>
            <li>
              <a target="_blank">@martaklisowska2017</a>
            </li>
            <li>
              <a target="_blank">@klisowska.marta@gmail.com</a>
            </li>
            <li>
              <p>+48 793 792 883</p>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      </main>
    </div>
  )
}

export default Kontakt