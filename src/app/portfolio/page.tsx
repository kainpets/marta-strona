import SideNav from "@/components/ui/SideNav"

function Portfolio() {
  return (
    <div className="bg-slate-200 w-screen min-h-screen">
      <main className="max-w-screen-2xl m-auto pt-16 px-16">
        <SideNav />
        <h2>Zapraszam do zapoznania się z występami moich pięknych par młodych, z których jestem BARDZO dumna! Więcej na moim profilu na YouTube.</h2>
        <div className="flex flex-row gap-8">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/i9EtZgCjfPk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mc-7tzKjJfE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LqvE-7Xv5fE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <button className="px-4 bg-green-400 text-white rounded-xl">
          <a href="https://www.youtube.com/@martaklisowska2017">ZOBACZ WIĘCEJ</a>
        </button>

      </main>

    </div>
  )
}

export default Portfolio