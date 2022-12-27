/* eslint-disable @next/next/no-img-element */
import { X } from 'phosphor-react'
import { useState } from 'react'
import {
  CloseButton,
  ImageContainer,
  Item,
  SideCartContainer,
} from '../styles/components/SideCart'

export function SideCart() {
  const [showCart, setShowcart] = useState(true)
  return (
    <SideCartContainer className={showCart ? 'show' : ''}>
      <CloseButton
        onClick={() => {
          setShowcart(false)
        }}
      >
        <X size={32} weight="bold" />
      </CloseButton>
      <div>
        <h1>Sacola de compras</h1>
        <Item>
          <ImageContainer>
            <img src="https://via.placeholder.com/80" alt="" />
          </ImageContainer>
          <div>
            <h1>Camiseta Beyond the Limits</h1>
            <h2>R$ 79,90</h2>
            <button>Remover</button>
          </div>
        </Item>

        <Item>
          <ImageContainer>
            <img src="https://via.placeholder.com/80" alt="" />
          </ImageContainer>
          <div>
            <h1>Camiseta Beyond the Limits</h1>
            <h2>R$ 79,90</h2>
            <button>Remover</button>
          </div>
        </Item>
        <Item>
          <ImageContainer>
            <img src="https://via.placeholder.com/80" alt="" />
          </ImageContainer>
          <div>
            <h1>Camiseta Beyond the Limits</h1>
            <h2>R$ 79,90</h2>
            <button>Remover</button>
          </div>
        </Item>
      </div>
      <footer>
        <h3>
          <span>Quantidade</span>
          <span>3 itens</span>
        </h3>
        <h2>
          <span>Valor Total</span>
          <strong>R$ 270,00</strong>
        </h2>
        <button>Finalizar compra</button>
      </footer>
    </SideCartContainer>
  )
}
