import { Handbag } from 'phosphor-react'
import { CardButtonContainer } from '../styles/components/CardButton'

export function CardButton() {
  return (
    <CardButtonContainer>
      <span>1</span>
      <Handbag size={24} weight="bold" />
    </CardButtonContainer>
  )
}
