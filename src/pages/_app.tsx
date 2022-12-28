import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoSGV from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'
import Link from 'next/link'
import { CardButton } from '../components/CardButton'
import { SideCart } from '../components/SideCart'
import { CartProvider } from 'use-shopping-cart'

globalStyles()

const STRIPE_PUBLIC_KEY = String(process.env.STRIPE_PUBLIC_KEY)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      shouldPersist={false}
      cartMode="checkout-session"
      stripe={STRIPE_PUBLIC_KEY}
      currency="BRL"
    >
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoSGV} alt="" />
          </Link>
          <CardButton />
        </Header>
        <Component {...pageProps} />
        <SideCart />
      </Container>
    </CartProvider>
  )
}
