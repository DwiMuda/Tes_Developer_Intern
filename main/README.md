Simple Landing Page – IT Developer Intern Test
About This Project

This is a responsive React landing page that shows product data from the DummyJSON API. It’s made to showcase React basics, fetching data from an API, component structure, and responsive design skills.

What’s Inside
Must-Have Features

React Functional Components – Using modern functional style

React Hooks – useState & useEffect in action

API Fetching – Get product data from DummyJSON

Clean Structure – Components separated nicely

Loading Spinner – Shows while fetching data

Error Messages – Friendly alerts if something goes wrong

Responsive Design – Works well on mobile and desktop

Bonus Stuff

Reusable Components – Card, Button, Navbar, Hero, Footer

Load More Button – Show more products on demand

Env Variables – API URL set in .env

Hover Effects – Smooth interactions

Product Images – Thumbnail display

Prices – Shows product prices

Tech Stack

React 18 – Frontend library

Vite – Build tool

JavaScript (ES6+) – Programming language

CSS-in-JS – Styling directly in JS

DummyJSON API – Where the data comes from

How It’s Organized
src/
├── components/
│ ├── Card.jsx # Product card
│ ├── Navbar.jsx # Top menu
│ ├── Hero.jsx # Hero section
│ └── Footer.jsx # Footer section
├── pages/
│ └── Home.jsx # Main page
├── services/
│ └── api.js # API helper
├── App.jsx # Root component
├── main.jsx # App entry point
└── index.css # Global styles

How to Run
Requirements

Node.js v14+

npm or yarn

Steps

Clone the repo:

git clone <repository-url>
cd <project-folder>

Install dependencies:

npm install

Add .env file in root:

VITE_API_URL=https://dummyjson.com/products

Start dev server:

npm run dev

Open http://localhost:5173 in your browser

Page Sections
Header / Navbar

Logo: "MyLanding"

Menu: Home, Products, Contact

Fully responsive

Hero

Big headline

Short subtext

“Get Started” button

Gradient background

Products

Fetches products from DummyJSON

Shows cards with image, title, short description, price, and “View Details” button

Grid layout, mobile-friendly

Loading spinner while fetching

Error message if API fails

“Load More” button (6 items at first)

Contact

Contact info

Call-to-action button

Footer

Copyright

Project credit

Responsive Design

Breakpoints:

Desktop: 1200px+

Tablet: 768–1199px

Mobile: <768px

Adjusts: menu spacing, headings, section padding, and grid columns

API

Endpoint:

GET https://dummyjson.com/products

How it works:

async/await for API calls

Try-catch for errors

Loading state

API URL from .env

Example Response:

{
products: [
{ id: 1, title: "Product Name", description: "Product description", price: 999, thumbnail: "image-url" },
// ...
]
}

Components

Card Component

<Card 
  title="Product Name"
  description="Product description"
  price={999}
  image="image-url"
/>

Features:

Props: title, description, price, image

Hover effects

Fallback image

Fully responsive

Checklist

Required: React, functional components, hooks, API, navbar, hero, products, footer, loading, error handling, responsive

Bonus: Reusable components, Load More, env variables, hover effects, clean UI/UX

Good Practices

Components with single responsibility

Proper state management with useState

useEffect for API calls

Error handling with try-catch

Logical folder structure

Semantic HTML & accessibility

Pagination for better performance

Notes

No backend needed

Static navigation (no routing)

CTA buttons are UI-only

Inline CSS for simplicity (can use Tailwind or CSS Modules later)

About Me

Created as a technical test for IT Developer Intern.
