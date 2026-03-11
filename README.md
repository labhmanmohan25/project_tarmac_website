# Tarmac Website

A modern web application built with Next.js and Tailwind CSS.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine (version 14 or higher).

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm start` - Runs the built app in production mode
- `npm run lint` - Runs the linter

## Project Structure

```
project_tarmac_website/
├── components/          # React components
│   ├── Layout.js       # Main layout wrapper
│   ├── Header.js       # Navigation header
│   └── Footer.js       # Site footer
├── pages/              # Next.js pages
│   ├── _app.js        # App wrapper
│   ├── index.js       # Home page
│   ├── about.js       # About page
│   └── contact.js     # Contact page
├── styles/             # CSS styles
│   └── globals.css    # Global styles with Tailwind
├── public/             # Static assets
├── package.json       # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
└── next.config.js     # Next.js configuration
```

## Features

- ✅ Next.js 14 with React 18
- ✅ Tailwind CSS for styling
- ✅ Responsive design
- ✅ SEO optimized with Next.js Head
- ✅ Professional layout with header and footer
- ✅ Multiple pages (Home, About, Contact)
- ✅ Contact form with state management
- ✅ Mobile-friendly navigation

## Customization

### Styling

This project uses Tailwind CSS for styling. You can customize the design by:

- Editing the Tailwind classes in components
- Modifying the `tailwind.config.js` file for custom theme settings
- Adding custom CSS in `styles/globals.css`

### Adding New Pages

1. Create a new file in the `pages/` directory
2. Export a React component as the default export
3. Add navigation links in `components/Header.js`

### Components

Reusable components are stored in the `components/` directory. The main layout structure uses:

- `Layout.js` - Wraps all pages with header and footer
- `Header.js` - Navigation with mobile menu
- `Footer.js` - Site footer with social links

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The app can be deployed to any platform that supports Node.js:

```bash
npm run build
npm start
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - utility-first CSS framework
- [React Documentation](https://reactjs.org/) - learn about React

## License

This project is open source and available under the [MIT License](LICENSE).
