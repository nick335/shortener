import "@/assets/styles/globals.scss"
import { Varela_Round, Inter, Poppins } from "next/font/google"

const varela_round = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-varela-round",
})
const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Url Shortener",
  description: "Url Shortener bg Engineering Career Expo",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${varela_round.variable} ${inter.variable} ${poppins.variable}`}>
      <body className="lg:flex lg:flex-col lg:min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
