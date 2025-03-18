# Deployment Guide for Fruitfy

This guide provides instructions for deploying the Fruitfy app to GitHub Pages and other platforms.

## GitHub Pages Deployment

The project is already set up for GitHub Pages deployment with the necessary scripts in package.json.

### Steps to Deploy

1. First, make sure you've pushed your code to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. Install the gh-pages package if you haven't already:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Deploy the app to GitHub Pages:
   ```bash
   npm run deploy
   ```

4. Your app will be deployed to: `https://your-username.github.io/fruitfy`

5. Make sure to update the "homepage" field in package.json with your actual GitHub username.

## Other Deployment Options

### Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Connect your GitHub repository
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

### Vercel

1. Create an account on [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. The default settings should work for a React app

## Environment Variables

If you need to use environment variables in production:

1. Create a `.env.production` file in the root directory
2. Add your production environment variables (make sure they start with `REACT_APP_`)
3. These will be used when building for production

## Troubleshooting

- If you encounter routing issues on GitHub Pages, make sure you're using HashRouter instead of BrowserRouter, or configure your app to handle client-side routing properly.
- For 404 errors, create a custom 404.html page in the public directory.