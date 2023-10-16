import "@/styles/globals.scss"
import { Varela_Round, Inter, Poppins } from "next/font/google"
import { store } from "@/redux/store"
import Providers from "@/redux/provider"


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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
}

export default function RootLayout({ children, auth }) {
  return (
    <html lang="en" className={`${varela_round.variable} ${inter.variable} ${poppins.variable}`}>
      <body className="lg:flex lg:flex-col lg:min-h-screen overflow-x-hidden">
        <Providers store={store}>
          {children}
          {auth}
        </Providers>
      </body>
    </html>
  )
}
