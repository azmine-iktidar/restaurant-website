# Swigo — Restaurant Website

A multi-page restaurant and food-ordering website template ("Swigo") built with React, TypeScript, and Vite. It ships with a large set of prebuilt pages — multiple home layouts, menus, shop/cart/checkout, blog, team, services, testimonials, and more — wired together with client-side routing.

## Tech Stack

- [React 18](https://react.dev) with TypeScript
- [Vite](https://vitejs.dev) for development and bundling
- [React Router](https://reactrouter.com) for client-side routing
- [Tailwind CSS](https://tailwindcss.com) alongside extensive custom CSS
- UI/UX libraries: [Swiper](https://swiperjs.com), `lightgallery`, `react-modal-video`, `react-datepicker`, `react-select`, `nouislider-react`, `react-responsive-masonry`, `react-simple-star-rating`, `react-lottie-player`
- `react-hot-toast` for notifications and [EmailJS](https://www.emailjs.com) for contact forms

## Features

- Several home page variants and inner pages (About, FAQ, Team, Services, Testimonials)
- Menu pages in multiple styles
- Shop flow: product listings, product detail, cart, wishlist, and checkout
- Blog grids and detail pages
- Utility pages: 404, Coming Soon, Under Maintenance
- Image galleries, sliders/carousels, video modals, and date pickers

## Getting Started

### Prerequisites

- Node.js (LTS) and a package manager (npm, pnpm, or yarn)

### Install and run

```bash
npm install
npm run dev      # start the Vite dev server
```

### Other scripts

```bash
npm run build    # type-check (tsc) and build for production
npm run preview  # preview the production build locally
npm run lint     # lint TypeScript/TSX files
```

## Project Structure

```
src/
  App.tsx        Router setup and page mapping
  pages/         All page components (home variants, menu, shop, blog, etc.)
  assets/        CSS (base, components, layout, pages, theme), icons, fonts
```
