import './globals.css'

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
      <body >
        <div >
          {children}
        </div>
      </body>
    </html>
  )
}
