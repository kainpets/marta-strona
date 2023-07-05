import './globals.css'
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
})


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
    <html lang="pl">
      <head>
        <link rel='icon' href='/favicon-32x32.png'></link>
      </head>
      <body className={`${poppins.className} bg-slate-200`}>
        <div >
          {children}
        </div>
      </body>
    </html>
  )
}
