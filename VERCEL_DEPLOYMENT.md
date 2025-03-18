# Vercel Deployment Guide for Fruitfy

This guide provides step-by-step instructions for deploying the Fruitfy React application to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (you can sign up with GitHub)
2. [Node.js](https://nodejs.org/) installed on your local machine
3. [Git](https://git-scm.com/) installed on your local machine

## Deployment Steps

### 1. Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

### 2. Prepare Your Project

Your project has already been configured for Vercel deployment with:
- Updated package.json with appropriate scripts
- vercel.json configuration file
- Proper .gitignore settings

### 3. Deploy to Vercel

#### Option 1: Using Vercel Dashboard (Recommended for First-time Deployment)

1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push
   ```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)

3. Click "New Project"

4. Import your GitHub repository

5. Configure your project:
   - Framework Preset: React
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Environment Variables: Add any necessary environment variables

6. Click "Deploy"

#### Option 2: Using Vercel CLI

1. Login to Vercel:
   ```bash
   vercel login
   ```

2. Deploy from your project directory:
   ```bash
   vercel
   ```

3. Follow the prompts to configure your deployment

### 4. Configure Custom Domain (Optional)

1. Go to your project in the Vercel Dashboard

2. Click on "Domains"

3. Add your custom domain and follow the instructions to set up DNS

## Continuous Deployment

Vercel automatically deploys your application when you push changes to your connected repository. No additional configuration is needed.

## Environment Variables

To add or modify environment variables:

1. Go to your project in the Vercel Dashboard
2. Click on "Settings" > "Environment Variables"
3. Add your variables (e.g., `REACT_APP_API_URL`)

## Troubleshooting

### Build Failures

If your build fails, check the build logs in the Vercel Dashboard for specific errors.

Common issues:
- Incompatible dependencies
- Syntax errors in your code
- Missing environment variables

### Routing Issues

If you encounter routing issues:
- Make sure your React Router is configured correctly
- Check that the vercel.json file is properly set up with the correct routes

### Performance Optimization

To improve performance:
- Use code splitting with React.lazy() and Suspense
- Optimize images and assets
- Enable caching headers in vercel.json

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)