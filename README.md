# Concrete Leveling Near Me - Lead Generation Site

A high-converting lead generation website for the concrete leveling niche built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

✅ **Premium Design** - Modern, conversion-focused UI with smooth animations  
✅ **Multi-Step Lead Form** - Engaging 3-step form to capture qualified leads  
✅ **Clean URL Structure** - SEO-friendly URLs (`/austin`, `/houston`, etc.)  
✅ **Dynamic City Pages** - Programmatic SEO with city-specific landing pages  
✅ **Mobile-First** - Fully responsive design optimized for all devices  
✅ **API Integration Ready** - Easy webhook integration for lead routing  
✅ **SEO Optimized** - Schema markup, sitemap, meta tags, and more  

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter + Outfit (Google Fonts)
- **Deployment**: Vercel (recommended)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `env.example.txt` and create a `.env.local` file:

```bash
# Optional: Add webhook URL for lead routing
LEAD_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_ID
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## URL Structure

- `/` - Homepage with lead form
- `/[city]` - Dynamic city pages (e.g., `/austin`, `/houston`)
- `/api/leads` - API endpoint for lead submissions

## Adding More Cities

Edit `src/app/[city]/page.tsx` and add cities to the array:

```typescript
const cities = [
  { slug: 'austin', name: 'Austin', state: 'TX' },
  { slug: 'your-city', name: 'Your City', state: 'ST' },
  // Add more...
];
```

The sitemap will automatically update.

## Lead Management

Leads are submitted to `/api/leads` and can be routed to:

1. **Zapier** - Use webhook URL in environment variables
2. **Make.com** - Similar webhook integration
3. **Database** - Add Supabase/PostgreSQL integration
4. **Email** - Integrate Resend, SendGrid, etc.
5. **CRM** - Direct integration with HubSpot, Salesforce, etc.

### Example Webhook Integration

Update `src/app/api/leads/route.ts` with your webhook URL:

```typescript
const webhookUrl = process.env.LEAD_WEBHOOK_URL;
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

```bash
npm run build  # Test production build locally
```

### Custom Domain

Update the base URL in:
- `src/app/sitemap.ts`
- `src/app/layout.tsx` (metadataBase)
- `src/app/robots.ts`

## Customization

### Brand Colors

Edit `src/app/globals.css` to change the color scheme:

```css
:root {
  --primary-500: #f97316;  /* Orange */
  --accent-500: #ef4444;   /* Red */
}
```

### Content

- **Homepage**: `src/app/page.tsx`
- **Components**: `src/components/`
- **City Pages**: `src/app/[city]/page.tsx`

## Performance

- ✅ Server-side rendering for SEO
- ✅ Static generation for city pages
- ✅ Optimized fonts and images
- ✅ Minimal JavaScript bundle

## SEO Checklist

- [x] Meta tags and Open Graph
- [x] Schema.org markup
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Semantic HTML
- [x] Fast page load times
- [x] Mobile-friendly
- [x] Clean URL structure

## Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT License - feel free to use for your lead gen business!
