import { Handbag } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'
import { CardButtonContainer } from '../styles/components/CardButton'

export function CardButton() {
  const { cartCount } = useShoppingCart()

  return (
    <CardButtonContainer disabled={!cartCount}>
      {!!cartCount && <span>{cartCount}</span>}
      <Handbag size={24} weight="bold" />
    </CardButtonContainer>
  )
}
