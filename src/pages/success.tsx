import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from '../styles/pages/success'

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
  }[]
  quantity: number
}

export default function Success({
  customerName,
  products,
  quantity,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImagesContainer>
          {products.map((product) => (
            <ImageContainer key={product.name}>
              <Image src={product.imageUrl} height={130} width={130} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <h1>Compra efetuada!</h1>

        {quantity === 1 ? (
          <p>
            Uhuul
            <strong> {customerName}</strong>, sua
            <strong> {products[0].name} </strong>
            já está a caminho da sua casa.
          </p>
        ) : (
          <p>
            Uhuul
            <strong> {customerName}</strong>, sua compra de {quantity} camisetas
            já está a caminho da sua casa.
          </p>
        )}

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name

  const products = session!.line_items!.data.map((lineItem) => {
    const product = lineItem.price!.product as Stripe.Product
    return {
      name: product.name,
      imageUrl: product.images[0],
    }
  })

  const quantity = session!.line_items!.data.reduce((sum, lineItem) => {
    return sum + Number(lineItem.quantity)
  }, 0)

  console.log(session!.line_items)

  return {
    props: {
      customerName,
      products,
      quantity,
    },
  }
}
