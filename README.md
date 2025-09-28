# Shopping Cart

A modern e-commerce shopping cart application built with React, TypeScript, and Tailwind CSS.
--
https://shopping-cart-lemon-ten.vercel.app/
## Features

- Browse products fetched from external API
- Add items to cart with custom quantities
- Increase/decrease item quantities
- Remove items from cart
- Real-time price calculations and totals
- Cart count badge in navigation
- Responsive design for mobile and desktop
- Modern UI with shadcn/ui components

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development
- **React Router** for navigation
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd shopping-cart
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   └── NavBar.tsx    # Navigation with cart badge
├── pages/
│   ├── Home.tsx      # Landing page
│   ├── Shop.tsx      # Product catalog
│   └── Cart.tsx      # Shopping cart
├── lib/
│   └── utils.ts      # Utility functions
└── App.tsx           # Main app component
```

## How to Use

1. **Browse Products**: Visit the Shop page to see available products
2. **Add to Cart**: Select quantity and click "Add to Cart" for any product
3. **Manage Cart**: View your cart to update quantities or remove items
4. **Checkout**: Review your order summary with total calculations
