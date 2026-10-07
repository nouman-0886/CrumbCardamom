\# Crumb \& Cardamom: Bakery Website Concept



A modern, responsive single-page website for a fictional premium bakery, built with React and Vite. It is a front-end portfolio project and a demo for showing local bakeries and cafés what a professional website can look like.



\## Features



\- Responsive layout from 320px to 1440px+, with a mobile slide-in menu

\- Sticky navbar that compacts on scroll

\- Hero, story, signature products, featured banner, tabbed menu, gallery, testimonials, CTA, contact and footer sections

\- Content kept in data files (products, menu, testimonials), so it is easy to rebrand for a client

\- Lazy-loaded images with a fallback if an image fails to load

\- Semantic HTML, SEO meta tags, keyboard-friendly navigation, reduced-motion support

\- No UI libraries or animation libraries. The only dependencies are React and Vite.



\## Tech Stack



React · Vite · JavaScript · plain CSS



\## Getting Started



```bash

npm install

npm run dev

```



Build for production:



```bash

npm run build

npm run preview

```



\## Customizing for a Client



| What to change | Where |

| --- | --- |

| Images | `src/data/images.js` |

| Products | `src/data/products.js` |

| Menu items and prices | `src/data/menu.js` |

| Testimonials | `src/data/testimonials.js` |

| Colors and fonts | CSS variables at the top of `src/index.css` |

| Name, address, phone, hours | `Navbar.jsx`, `Contact.jsx`, `Footer.jsx`, `index.html` |



\## Project Structure



```

src/

├── components/   # One component per page section

├── data/         # Products, menu, testimonials, image URLs

├── App.jsx

├── main.jsx

└── index.css

```



\## Notes



\- The brand, address, phone number and reviews are fictional placeholders.

\- Images are loaded from Unsplash for demo purposes. Replace them with licensed or client-owned photos before any real use.



\## Author



Built by Muhammad Nouman Ijaz · \[Portfolio](https://linkedin.com/in/nouman-webdev)

