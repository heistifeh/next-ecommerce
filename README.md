# Next E-Commerce

A full-stack online store built with **Next.js 15**. Products are managed in **Sanity CMS**, customers sign in with **Clerk**, and checkout runs through **Stripe**.

**Live demo:** [next-ecommerce-eta-nine.vercel.app](https://next-ecommerce-eta-nine.vercel.app)

<p>
  <img src="https://img.shields.io/badge/Next.js-15-000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe"/>
  <img src="https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white" alt="Sanity"/>
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk"/>
</p>

## Features

- Product catalogue and content managed in Sanity CMS
- User sign-up and sign-in with Clerk
- Shopping cart state managed with Zustand
- Secure checkout with Stripe
- Responsive UI built with Tailwind CSS, shadcn/ui and Framer Motion

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js 15 (App Router), React, TypeScript |
| CMS | Sanity |
| Auth | Clerk |
| Payments | Stripe |
| State | Zustand |
| UI | Tailwind CSS, shadcn/ui (Radix), Framer Motion, Lucide |

## Running locally

```bash
git clone https://github.com/heistifeh/next-ecommerce.git
cd next-ecommerce
npm install
```

Add a `.env.local` file with your Sanity (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`), Clerk and Stripe keys, then start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Author

Built by **Boluwatife Osineye**. [Portfolio](https://boluwatifeosineye.com) · [LinkedIn](https://linkedin.com/in/boluwatifeosineye) · [X](https://x.com/tifethedev)
