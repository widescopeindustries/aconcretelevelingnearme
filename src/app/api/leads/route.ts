import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate required fields
        const { zipCode, concreteTypes, name, email, phone, timeline } = body;

        if (!zipCode || !concreteTypes || !name || !email || !phone || !timeline) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Here you would typically:
        // 1. Save to database (Supabase, PostgreSQL, etc.)
        // 2. Send to CRM (HubSpot, Salesforce, etc.)
        // 3. Send email notifications
        // 4. Trigger webhooks to contractor matching system

        // For now, we'll log the lead and return success
        console.log('New Lead Received:', {
            zipCode,
            concreteTypes,
            name,
            email,
            phone,
            timeline,
            timestamp: new Date().toISOString(),
        });

        // Example: Send to webhook or email service
        // await sendToWebhook(body);
        // await sendEmailNotification(body);

        return NextResponse.json(
            {
                success: true,
                message: 'Lead received successfully',
                leadId: `LEAD-${Date.now()}` // Generate a unique ID
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error processing lead:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// Optional: Add webhook integration
async function sendToWebhook(leadData: any) {
    // Example webhook to Zapier, Make.com, or your own endpoint
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (!webhookUrl) return;

    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...leadData,
                source: 'concretelevelingnearme.com',
                timestamp: new Date().toISOString(),
            }),
        });
    } catch (error) {
        console.error('Webhook error:', error);
    }
}
