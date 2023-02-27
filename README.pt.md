[English 🇬🇧](README.md)

# Ignite Shop

O Ignite Shop é uma loja virtual simples e funcional conectada com a API da Stripe. Que pode ser acessado em https://ignite-shop-gilt.vercel.app/

Este projeto foi desenvolvido no curso Ignite da Rocketseat. O objetivo do projeto foi aprender e aplicar conhecimentos em tecnologias como Next.js, integração com a API da Stripe, Static Site Generator (SSG), utilização do Next para requisições backend, manipulação de carrinho de compras, otimizações de imagens com Next, criação de componentes estilizados com Stitches, TypeScript e muito mais!

## Funcionalidades

O Ignite Shop é uma loja virtual simples conectada com a API da Stripe. As principais funcionalidades do projeto são:

- Listagem de produtos na página inicial, que são cadastrados através do sistema da Stripe.
- Exibição de informações detalhadas sobre um produto ao clicar sobre ele.
- Adição de produtos ao carrinho de compras ao clicar no botão correspondente.
- Exibição de um menu lateral com os produtos adicionados ao carrinho e o valor total da compra.
- Finalização da compra através da integração com a API da Stripe.
- Exibição de uma tela mostrando o status do pedido após o pagamento.

## Tecnologias utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- Next.js
- Stripe
- use-shopping-cart
- Keen-Slider
- Stitches
- Axios
- ESLint
- Phosphor React

## Como utilizar

Para utilizar o projeto, é necessário ter o Node.js instalado na sua máquina. Siga os passos abaixo:

1. Clone este repositório utilizando o comando `git clone https://github.com/HenriqueMarcelo/ignite-shop.git`.
2. Acesse a pasta do projeto com o comando `cd ignite-shop`.
3. Instale as dependências do projeto com o comando `npm install`.
4. Crie um arquivo `.env.local` copiando o arquivo `.env.exemple` e insira suas chaves de integração com a Stripe e url do projeto.
5. Inicie o servidor de desenvolvimento com o comando `npm run dev`.
6. Acesse o endereço http://localhost:3000 no seu navegador para utilizar a aplicação.
