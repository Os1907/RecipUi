import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";

const pop = Poppins({ subsets: ["latin"] , 
weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] ,
});

export const metadata = {
  title: "RecipUi",
  description: "Generated by create next app",
 
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <link rel="icon" href="./favicon.ico" type="image/ico"/>
  <link rel="apple-touch-icon" sizes="180x180" href="./favicon.ico" />
</head>
      <body className={pop.className }>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}