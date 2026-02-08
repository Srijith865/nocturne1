# Deployment Guide - Vercel

This guide will help you deploy your Vite + React + TypeScript application to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier available)
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- Node.js installed locally for testing

## Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Import Your Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Select **"Import Git Repository"**
4. Authorize Vercel to access your Git provider if needed
5. Select the `nocturne1` repository

#### Step 2: Configure Project

Vercel will auto-detect your Vite configuration. Verify the following settings:

- **Framework Preset:** Vite
- **Build Command:** `npm run build` or `vite build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

#### Step 3: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-3 minutes)
3. Your app will be available at: `https://your-project-name.vercel.app`

---

### Method 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

#### Step 3: Deploy from Project Directory

```bash
# Navigate to your project directory
cd nocturne1-main

# Deploy to production
vercel --prod
```

The CLI will guide you through the initial setup and deploy your application.

---

## Environment Variables

If your application uses environment variables:

1. Go to your project on Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add your variables in the format:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://api.example.com`
   - **Environment:** Production / Preview / Development

> **Note:** Vite environment variables must be prefixed with `VITE_` to be exposed to the client.

---

## Custom Domain Setup

### Option 1: Via Vercel Dashboard

1. Go to your project on Vercel
2. Navigate to **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter your domain name (e.g., `www.example.com`)
5. Follow the DNS configuration instructions provided by Vercel

### Option 2: Via Vercel CLI

```bash
vercel domains add www.example.com
```

---

## Build Configuration

The project includes a `vercel.json` file with the following configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### What This Does:

- **buildCommand:** Runs the Vite build process
- **outputDirectory:** Specifies where the build output is located
- **rewrites:** Enables client-side routing for React Router (all routes serve `index.html`)

---

## Troubleshooting

### Build Fails

**Problem:** Build fails with dependency errors

**Solution:**
```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 Errors on Routes

**Problem:** Direct navigation to routes (e.g., `/about`) returns 404

**Solution:** The `vercel.json` file includes rewrites to handle SPA routing. If you still see 404s, verify that `vercel.json` is in the project root.

### Build Timeout

**Problem:** Build process times out

**Solution:** 
- Check for large dependencies that can be optimized
- Consider using build caching
- Upgrade to a paid Vercel plan for longer build times

### Environment Variables Not Working

**Problem:** `import.meta.env.VITE_*` variables are undefined

**Solution:**
- Ensure variables are prefixed with `VITE_`
- Add them in Vercel Dashboard under Environment Variables
- Redeploy the project after adding variables

---

## Continuous Deployment

Vercel automatically sets up continuous deployment:

- **Production:** Deployments from your `main` or `master` branch
- **Preview:** Deployments from pull requests and other branches
- Each push triggers a new deployment
- Pull requests get unique preview URLs

---

## Monitoring and Analytics

### View Deployment Logs

1. Go to Vercel Dashboard
2. Select your project
3. Click on a deployment
4. View **Build Logs** and **Function Logs**

### Enable Web Analytics

1. Go to **Analytics** tab in your project
2. Enable **Web Analytics** (available on all plans)
3. View pageviews, visitors, and performance metrics

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Custom Domains Guide](https://vercel.com/docs/concepts/projects/domains)

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel (CLI)
vercel --prod

# Check deployment status
vercel ls
```

---

## Support

If you encounter issues not covered in this guide:

- Check [Vercel's Status Page](https://www.vercel-status.com/)
- Visit [Vercel Community](https://github.com/vercel/vercel/discussions)
- Contact Vercel Support (available on paid plans)
