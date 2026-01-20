/**
 * Bulk Index All City Pages to Google Search Console
 * 
 * This script submits all city pages to Google Search Console for indexing.
 * Run with: npx tsx scripts/bulk-index-cities.ts
 */

import { cities } from '../src/data/cities';

const BASE_URL = 'https://aconcretelevelingnearme.vercel.app';
const API_ENDPOINT = `${BASE_URL}/api/index-url`;

async function indexUrl(url: string): Promise<boolean> {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log(`✅ Indexed: ${url}`);
            return true;
        } else {
            console.error(`❌ Failed: ${url} - ${data.error}`);
            return false;
        }
    } catch (error) {
        console.error(`❌ Error indexing ${url}:`, error);
        return false;
    }
}

async function bulkIndexCities() {
    console.log(`🚀 Starting bulk indexing of ${cities.length} city pages...\n`);

    let successCount = 0;
    let failCount = 0;

    // Index homepage first
    console.log('📍 Indexing homepage...');
    const homepageSuccess = await indexUrl(BASE_URL);
    if (homepageSuccess) successCount++;
    else failCount++;

    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Index all city pages
    for (let i = 0; i < cities.length; i++) {
        const city = cities[i];
        const url = `${BASE_URL}/${city.slug}`;

        console.log(`[${i + 1}/${cities.length}] Indexing: ${city.name}, ${city.state}...`);

        const success = await indexUrl(url);
        if (success) successCount++;
        else failCount++;

        // Rate limiting: wait 1 second between requests
        if (i < cities.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    console.log('\n📊 Indexing Complete!');
    console.log(`✅ Success: ${successCount}`);
    console.log(`❌ Failed: ${failCount}`);
    console.log(`📈 Total: ${successCount + failCount}`);
}

// Run the script
bulkIndexCities().catch(console.error);
