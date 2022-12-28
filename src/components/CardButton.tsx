import { Handbag } from 'phosphor-react'
import { HTMLAttributes } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { CardButtonContainer } from '../styles/components/CardButton'

interface CardButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export function CardButton({ ...rest }: CardButtonProps) {
  const { cartCount } = useShoppingCart()

  return (
    <CardButtonContainer disabled={!cartCount} {...rest}>
      {!!cartCount && <span>{cartCount}</span>}
      <Handbag size={24} weight="bold" />
    </CardButtonContainer>
  )
}
