import SideNav from "@/components/ui/SideNav"

function Portfolio() {
  return (
    <div className="bg-slate-200 w-screen min-h-screen">
      <main className="max-w-screen-2xl m-auto pt-16 px-16">
        <SideNav />
        <div className="pt-16">
          <h2>Zapraszam do zapoznania się z występami moich pięknych par młodych, z których jestem BARDZO dumna! Więcej na moim profilu na YouTube.</h2>
          <div style={{
            display: "grid",
            gridGap: "16px",
            gridTemplateColumns: "auto auto auto",
            paddingTop: "2rem",
            height: "40vh"
          }}>
            <iframe className="w-full h-full aspect-video" src="https://www.youtube.com/embed/i9EtZgCjfPk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe className="w-full h-full aspect-video" src="https://www.youtube.com/embed/mc-7tzKjJfE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe className="w-full h-full aspect-video" src="https://www.youtube.com/embed/LqvE-7Xv5fE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="w-1/2 mx-auto text-center pt-8 ">
            <button className="h-8 px-4 bg-green-400 text-white rounded-xl hover:scale-125 hover:bg-green-500 transition duration-500">
              <a target="_blank" href="https://www.youtube.com/@martaklisowska2017">ZOBACZ WIĘCEJ</a>
            </button>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Portfolio