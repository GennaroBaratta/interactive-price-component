import '@/styles/globals.css'
import { Manrope } from 'next/font/google'
import type { AppProps } from 'next/app'

const manrope = Manrope({ subsets: ['latin'], weight: ['600', '800'] })

export default function App({ Component, pageProps }: AppProps) {
  return <Component className={manrope.className} {...pageProps} />
}
