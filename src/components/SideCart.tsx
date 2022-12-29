import axios from 'axios'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { CartEntry } from 'use-shopping-cart/core'
import {
  CloseButton,
  ImageContainer,
  Item,
  SideCartContainer,
} from '../styles/components/SideCart'

export function SideCart() {
  const {
    formattedTotalPrice,
    shouldDisplayCart,
    handleCloseCart,
    cartCount,
    cartDetails,
    removeItem,
  } = useShoppingCart()

  const cartItems = [] as CartEntry[]
  for (const key in cartDetails) {
    cartItems.push(cartDetails[key])
  }

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        cart: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <SideCartContainer className={shouldDisplayCart ? 'show' : ''}>
      <CloseButton onClick={handleCloseCart}>
        <X size={32} weight="bold" />
      </CloseButton>
      <div>
        <h1>Sacola de compras</h1>
        {cartItems.map((item) => {
          return (
            <Item key={item.id}>
              <ImageContainer>
                {!!item.image && (
                  <Image src={item.image} width={95} height={95} alt="" />
                )}
              </ImageContainer>
              <div>
                <h1>{item.name}</h1>
                <h2>{item.formattedValue}</h2>
                <button onClick={() => removeItem(item.id)}>Remover</button>
              </div>
            </Item>
          )
        })}
      </div>
      <footer>
        <h3>
          <span>Quantidade</span>
          <span>
            {cartCount} {cartCount! === 1 ? 'item' : 'itens'}
          </span>
        </h3>
        <h2>
          <span>Valor Total</span>
          <strong>{formattedTotalPrice}</strong>
        </h2>
        <button
          onClick={handleBuyProducts}
          disabled={isCreatingCheckoutSession}
        >
          Finalizar compra
        </button>
      </footer>
    </SideCartContainer>
  )
}
