import { useRouter } from 'next/router'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 78,52</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum
          esse quaerat blanditiis assumenda recusandae asperiores? Corrupti
          nesciunt quaerat molestiae excepturi, adipisci nisi voluptas
          cupiditate impedit accusantium optio soluta eaque!
        </p>

        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
