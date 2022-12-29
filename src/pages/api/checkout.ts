import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'
import { CartEntry } from 'use-shopping-cart/core'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { cart } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!cart) {
    return res.status(400).json({ error: 'Price not found' })
  }

  const lineItems = cart.map((cartItem: CartEntry) => {
    return {
      price: cartItem.defaultPriceId,
      quantity: cartItem.quantity,
    }
  })

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: lineItems,
    cancel_url: cancelUrl,
    success_url: successUrl,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
