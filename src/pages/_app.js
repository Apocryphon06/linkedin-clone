import Header from '@/components/Header'
import Messaging from '@/components/Messaging'
import '@/styles/globals.css'

import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'

import store from '../store'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (

    <Provider store={store}>
      <main className={`${inter.className} relative bg-[#f4f2ee]`}>
        <Header />
        <Component {...pageProps} />
        <Messaging />
      </main>
    </Provider>
  )
}
