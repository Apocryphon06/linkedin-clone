import Header from '@/components/Header'
import '@/styles/globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.className}`}>
      {/* <Header /> */}
      <Component {...pageProps} />
    </main>
  )
}
