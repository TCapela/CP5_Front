import "./globals.css";
import Cabecalho from "@/src/components/Cabecalho/Cabecalho";


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
        <div className="content-wrap">
          {children}
        </div>
      </body>
    </html>
  )
}
