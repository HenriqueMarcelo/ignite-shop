import Image from 'next/image'

import Head from 'next/head'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Link from 'next/link'

import { HomeContainer, Product } from '../styles/pages/home'

import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import { Handbag } from 'phosphor-react'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const gap = 48
  let origin = 0.5
  if (typeof window !== 'undefined') {
    const viwelportWidth = window.visualViewport!.width
    const paddingLeft = (viwelportWidth - 1180) / 2
    origin = (paddingLeft + gap) / viwelportWidth
  }
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: gap,
      origin,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`product/${product.id}`}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} alt="" width="520" height="480" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <button>
                    <Handbag size={32} weight="bold" />
                  </button>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

// SSG is a alternative to GetServerSideProps
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
