import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoSGV from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'
import Link from 'next/link'
import { CardButton } from '../components/CardButton'
import { SideCart } from '../components/SideCart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  )
}
