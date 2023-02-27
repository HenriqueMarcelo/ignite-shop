[Português 🇧🇷](README.pt.md)

# Ignite Shop

The Ignite Shop is a simple and functional e-shop connected with Stripe's API. It can be accessed at https://ignite-shop-gilt.vercel.app/.

This project was developed during Rocketseat's Ignite course. The goal of the project was to learn and apply knowledge in technologies like Next.js, integration with Stripe's API, Static Site Generator (SSG), using Next for backend requests, shopping cart manipulation, image optimizations with Next, creating styled components with Stitches, TypeScript and much more!

## Features

Ignite Shop is a simple e-shop connected with Stripe's API. The main features of the project are:

- Listing of products on the home page, which are registered through Stripe's system.
- Display detailed information about a product by clicking on it
- Adding products to the shopping cart by clicking on the corresponding button.
- Displaying a side menu with the products added to the cart and the total amount of the purchase.
- Checkout through integration with Stripe's API.
- Display of a screen showing the status of the order after payment.

## Technologies used

The project was built using the following technologies:

- Next.js
- Stripe
- use-shopping-cart
- Keen-Slider
- Stitches
- Axios
- ESLint
- Phosphor React

## How to use

To use the project, you need to have Node.js installed on your machine. Follow the steps below:

1. Clone this repository using the `git clone https://github.com/HenriqueMarcelo/ignite-shop.git` command.
2. Access the project folder with the `cd ignite-shop` command.
3. Install the project dependencies with the `npm install` command.
4. Create an `.env.local` file by copying the `.env.example` file and insert your Stripe integration keys and project url.
5. Start the development server with the `npm run dev` command.
6. Go to http://localhost:3000 in your browser to use the application.
