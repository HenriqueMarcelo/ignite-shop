import Image from 'next/image'
import { X } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'
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

  const cartItems = []
  for (const key in cartDetails) {
    cartItems.push(cartDetails[key])
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
        <button>Finalizar compra</button>
      </footer>
    </SideCartContainer>
  )
}
