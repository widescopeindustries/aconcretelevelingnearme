# 🚀 Push to GitHub & Deploy to Vercel

## ✅ Code is Ready!

Your code has been committed locally. Now let's get it on GitHub and deployed!

---

## Step 1: Create GitHub Repository

1. Go to **https://github.com/new**
2. Repository name: `concretelevelingnearme` (or whatever you prefer)
3. Description: `Lead generation site for concrete leveling services`
4. **Make it Private** (recommended for business projects)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

---

## Step 2: Push Your Code

After creating the repo, GitHub will show you commands. Run these in your terminal:

```bash
# Add the GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/concretelevelingnearme.git

# Push to GitHub
git push -u origin master
```

**Or if you prefer SSH:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/concretelevelingnearme.git
git push -u origin master
```

---

## Step 3: Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest)

1. Go to **https://vercel.com**
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your `concretelevelingnearme` repository
5. Vercel will auto-detect Next.js settings ✅
6. Click **"Deploy"**

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

---

## Step 4: Configure Environment Variables (Optional)

If you want to add lead webhook integration:

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Environment Variables**
3. Add:
   - Name: `LEAD_WEBHOOK_URL`
   - Value: `https://hooks.zapier.com/hooks/catch/YOUR_ID`
4. Click **Save**
5. Redeploy to apply changes

---

## Step 5: Add Custom Domain

1. In Vercel, go to **Settings** → **Domains**
2. Add: `aconcretelevelingnearme.com`
3. Vercel will give you DNS records
4. Go to your domain registrar (Namecheap, GoDaddy, etc.)
5. Add the DNS records Vercel provides
6. Wait 5-60 minutes for DNS propagation
7. SSL certificate auto-configures ✅

---

## 🎯 Quick Commands Reference

```bash
# Check git status
git status

# Make changes and commit
git add .
git commit -m "Your commit message"
git push

# Deploy to Vercel (if using CLI)
vercel --prod
```

---

## 📊 What Happens After Deploy

1. ✅ Your site goes live at `https://your-project.vercel.app`
2. ✅ Every git push auto-deploys
3. ✅ Preview deployments for every branch
4. ✅ Analytics available in Vercel dashboard
5. ✅ Custom domain works with SSL

---

## 🔧 Vercel Project Settings

Vercel should auto-detect these, but verify:

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Node Version:** 18.x or higher

---

## 🚨 Troubleshooting

**Build fails on Vercel?**
- Check the build logs
- Run `npm run build` locally first
- Ensure all dependencies are in `package.json`

**Domain not working?**
- DNS can take up to 48 hours (usually 5-60 minutes)
- Check DNS propagation: https://dnschecker.org
- Verify DNS records match Vercel's instructions

**Environment variables not working?**
- Make sure they're added in Vercel dashboard
- Redeploy after adding variables
- Check variable names match your code

---

## 🎉 You're Done!

Once deployed, your lead gen site will be live at:
- **Vercel URL:** `https://concretelevelingnearme.vercel.app`
- **Custom Domain:** `https://aconcretelevelingnearme.com` (once DNS configured)

**Next:** Set up your lead webhook and start capturing leads! 💰

---

Need help? Check:
- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
