import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import { Press_Start_2P } from 'next/font/google'

const pixelFont = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
})

export const metadata = {
  title: 'Your Portfolio',
  description: 'Welcome to my portfolio site.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={pixelFont.variable}>

      <body>
        <div className="layout">
          <main className="main-content">{children}</main>
          <Navbar />
        </div>
        <Footer />
      </body>
    </html>
  )
}
