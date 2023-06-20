
import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iMDB',
  description: 'Find new things from here.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}

        {/* Header */}
        <Header></Header>

        {/* Navbar */}

        {/* SearchBox */}
      
      </body>
    </html>
  )
}
