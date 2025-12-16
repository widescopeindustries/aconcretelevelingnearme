# Google Search Console API Setup

This project uses the Google Search Console API to automatically submit URLs for indexing.

## Prerequisites

You need:
1. A Google Cloud Project with Search Console API enabled
2. A Service Account with access to your Search Console property
3. The service account JSON key

## Environment Variables

Add the following to your `.env.local` file (for local development) and Vercel environment variables (for production):

```bash
GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"directory-474206",...}'
```

**Important**: The entire JSON key must be on a single line, wrapped in single quotes.

### Adding to Vercel

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add a new variable:
   - **Name**: `GOOGLE_SERVICE_ACCOUNT_KEY`
   - **Value**: Paste the entire JSON key (the one you shared earlier)
   - **Environment**: Production, Preview, Development (select all)
4. Click **Save**
5. Redeploy your site

## API Endpoints

### POST `/api/index-url`

Submit a single URL to Google Search Console for indexing.

**Request Body:**
```json
{
  "url": "https://aconcretelevelingnearme.vercel.app/austin-tx"
}
```

**Response:**
```json
{
  "success": true,
  "message": "URL submitted for indexing: https://aconcretelevelingnearme.vercel.app/austin-tx",
  "url": "https://aconcretelevelingnearme.vercel.app/austin-tx"
}
```

## Bulk Indexing Script

To index all city pages at once:

```bash
npm run index:cities
```

This will:
1. Submit the homepage for indexing
2. Submit all 200+ city pages sequentially
3. Add a 1-second delay between requests to avoid rate limiting
4. Show progress and final statistics

**Expected Output:**
```
🚀 Starting bulk indexing of 255 city pages...

📍 Indexing homepage...
✅ Indexed: https://aconcretelevelingnearme.vercel.app
[1/255] Indexing: Austin, TX...
✅ Indexed: https://aconcretelevelingnearme.vercel.app/austin-tx
...

📊 Indexing Complete!
✅ Success: 256
❌ Failed: 0
📈 Total: 256
```

## When to Run This

- **After deploying new city pages**: Run the bulk script to get them indexed quickly
- **After major content updates**: Re-submit affected URLs
- **Weekly maintenance**: Re-index top 20 pages to keep them fresh

## Troubleshooting

### Error: "GOOGLE_SERVICE_ACCOUNT_KEY environment variable is not set"

Make sure you've added the environment variable to:
- `.env.local` for local development
- Vercel project settings for production

### Error: "Failed to submit URL for indexing"

Check that:
1. The service account email is added to your Search Console property with "Owner" permissions
2. The Search Console API is enabled in your Google Cloud project
3. The JSON key is valid and properly formatted

### Rate Limiting

Google has rate limits on the Indexing API. The bulk script includes a 1-second delay between requests. If you hit rate limits:
- Increase the delay in `scripts/bulk-index-cities.ts`
- Split the indexing into smaller batches
- Run the script during off-peak hours

## Next Steps

Once this is working, you can:
1. Add the script to a GitHub Action to run weekly
2. Trigger indexing automatically when new city pages are added
3. Build a dashboard to monitor indexing status
