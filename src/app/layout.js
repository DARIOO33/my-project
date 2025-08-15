import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "./footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "DéBarras Pro",
    template: "%s | Service de débarras en France",
  },
  description:
    "Professionnels du débarras de maison, appartement, cave et nettoyage après décès. Service rapide et respectueux.",
  keywords: ["débarras", "nettoyage", "France", "vidage maison", "recyclage"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
