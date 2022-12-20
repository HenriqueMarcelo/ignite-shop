import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { HomeContainer, Product } from '../styles/pages/home'

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="" width="520" height="480" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="" width="520" height="480" />

        <footer>
          <strong>Camiseta XX</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width="520" height="480" />

        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width="520" height="480" />

        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
