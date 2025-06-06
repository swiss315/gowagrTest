import type { Metadata } from "next";
import { Gloria_Hallelujah, Anek_Gurmukhi } from "next/font/google";
import "./globals.css";

const gloria = Gloria_Hallelujah({
    subsets: ['latin'],
    variable: '--font-gloria',
    weight: "400"
})

const anek = Anek_Gurmukhi({
    subsets: ['latin'],
    variable: '--font-anek',
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gloria.variable} ${anek.variable}`}>
      <body
        className={` antialiased`}
        style={{fontFamily: 'Eudoxus Sans, sans-serif'}}
      >
        {children}
      </body>
    </html>
  );
}
