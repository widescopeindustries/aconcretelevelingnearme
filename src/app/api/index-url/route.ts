import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Initialize Google Search Console API client
function getSearchConsoleClient() {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
        throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY environment variable is not set');
    }

    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

    const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    return google.searchconsole({ version: 'v1', auth });
}

export async function POST(request: NextRequest) {
    try {
        const { url } = await request.json();

        if (!url) {
            return NextResponse.json(
                { error: 'URL is required' },
                { status: 400 }
            );
        }

        // Validate URL format
        try {
            new URL(url);
        } catch {
            return NextResponse.json(
                { error: 'Invalid URL format' },
                { status: 400 }
            );
        }

        const searchconsole = getSearchConsoleClient();
        const siteUrl = 'https://aconcretelevelingnearme.vercel.app/';

        // Submit URL for indexing
        await searchconsole.urlInspection.index.inspect({
            requestBody: {
                inspectionUrl: url,
                siteUrl: siteUrl,
            },
        });

        console.log(`✅ Successfully submitted URL for indexing: ${url}`);

        return NextResponse.json({
            success: true,
            message: `URL submitted for indexing: ${url}`,
            url,
        });

    } catch (error: any) {
        console.error('❌ Error submitting URL to Search Console:', error);

        return NextResponse.json(
            {
                error: 'Failed to submit URL for indexing',
                details: error.message
            },
            { status: 500 }
        );
    }
}
