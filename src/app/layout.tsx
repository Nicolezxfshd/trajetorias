import type { Metadata } from "next";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";


// Fonte padrão
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal de Viagens",
  description:
    "O portal definitivo para suas aventuras pelo mundo, saiba qual é seu próximo destino!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>
         <Header/>
         {children}
         <Footer/>
      </body>
    </html>
  );
}

