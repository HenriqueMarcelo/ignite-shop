import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const priceId = 'price_1MHAW3AbdJ8mvfKR93gbyjU7'
  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = `${process.env.NEXT_URL}/`
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    cancel_url: cancelUrl,
    success_url: successUrl,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
