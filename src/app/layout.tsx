import { Roboto } from 'next/font/google';
import Cabecalho from '@/components/Cabecalho/Cabecalho';
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  style: 'normal',
  display: 'swap'
});

export default function RootLayout({ 
  children, 
}: Readonly<{ 
  children: React.ReactNode; 
}>) {  
  return (
    <html lang="pt-BR">
      <body className="">
        <Cabecalho />
        <div className={`${roboto.className} content-wrap`}>
          {children}
        </div>
      </body>
    </html>
  );
}
