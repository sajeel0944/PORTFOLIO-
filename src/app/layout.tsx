import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata: Metadata={
  title:"SAJEEL ULLAH KHAN  ",
  description:"",
  icons:{
    icon:['/picture/sajeel1-removebg-preview.png']
  }
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
