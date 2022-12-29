import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

interface ProductType {
  id: string
  name: string
  imageUrl: string
  price: string
  originalPrice: number
  description: string
  defaultPriceId: string
}

interface ProductProps {
  product: ProductType
}

export default function Product({ product }: ProductProps) {
  const { addItem, handleCartClick } = useShoppingCart()

  function handlePutOnCart() {
    const productToCart = {
      name: product.name,
      id: product.id,
      price: product.originalPrice,
      currency: 'BRL',
      image: product.imageUrl,
      defaultPriceId: product.defaultPriceId,
    }

    addItem(productToCart)

    handleCartClick()
  }

  const { isFallback } = useRouter()
  if (isFallback) {
    return (
      <ProductContainer>
        <ImageContainer skeleton={true}></ImageContainer>
        <ProductDetails skeleton={true}>
          <h1></h1>
          <span></span>
          <p></p>
          <button></button>
        </ProductDetails>
      </ProductContainer>
    )
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={handlePutOnCart}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        originalPrice: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
