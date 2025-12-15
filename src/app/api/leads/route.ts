import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

        // Get the referrer to know which page they came from
        const referer = request.headers.get('referer') || 'Direct';
        const timestamp = new Date().toLocaleString('en-US', {
            timeZone: 'America/Chicago',
            dateStyle: 'full',
            timeStyle: 'long'
        });

        // Send email notification via Resend
        try {
            await resend.emails.send({
                from: 'Concrete Leveling Leads <leads@aconcretelevelingnearme.com>',
                to: ['morelyndon@pm.me'],
                subject: `🚨 NEW LEAD: ${name} from ${zipCode}`,
                html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
                  color: white;
                  padding: 30px;
                  border-radius: 10px 10px 0 0;
                  text-align: center;
                }
                .header h1 {
                  margin: 0;
                  font-size: 28px;
                }
                .content {
                  background: #f9fafb;
                  padding: 30px;
                  border-radius: 0 0 10px 10px;
                }
                .field {
                  background: white;
                  padding: 15px;
                  margin-bottom: 15px;
                  border-radius: 8px;
                  border-left: 4px solid #FF6B35;
                }
                .field-label {
                  font-weight: bold;
                  color: #FF6B35;
                  font-size: 12px;
                  text-transform: uppercase;
                  margin-bottom: 5px;
                }
                .field-value {
                  font-size: 16px;
                  color: #333;
                }
                .urgent {
                  background: #fef2f2;
                  border-left-color: #ef4444;
                  padding: 20px;
                  border-radius: 8px;
                  margin-top: 20px;
                }
                .urgent-text {
                  color: #ef4444;
                  font-weight: bold;
                  font-size: 14px;
                }
                .footer {
                  text-align: center;
                  margin-top: 30px;
                  padding-top: 20px;
                  border-top: 2px solid #e5e7eb;
                  color: #6b7280;
                  font-size: 12px;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <h1>🎯 New Concrete Leveling Lead!</h1>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="field-label">Lead Name</div>
                  <div class="field-value">${name}</div>
                </div>

                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value"><a href="mailto:${email}">${email}</a></div>
                </div>

                <div class="field">
                  <div class="field-label">Phone</div>
                  <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
                </div>

                <div class="field">
                  <div class="field-label">ZIP Code</div>
                  <div class="field-value">${zipCode}</div>
                </div>

                <div class="field">
                  <div class="field-label">Concrete Type(s)</div>
                  <div class="field-value">${Array.isArray(concreteTypes) ? concreteTypes.join(', ') : concreteTypes}</div>
                </div>

                <div class="field">
                  <div class="field-label">Timeline</div>
                  <div class="field-value">${timeline}</div>
                </div>

                <div class="field">
                  <div class="field-label">Source Page</div>
                  <div class="field-value">${referer}</div>
                </div>

                <div class="field">
                  <div class="field-label">Submitted At</div>
                  <div class="field-value">${timestamp}</div>
                </div>

                ${timeline === 'asap' ? `
                  <div class="urgent">
                    <div class="urgent-text">⚡ URGENT: This lead needs service ASAP!</div>
                  </div>
                ` : ''}
              </div>

              <div class="footer">
                <p>Lead from aconcretelevelingnearme.vercel.app</p>
                <p>You're receiving this because you own this lead generation site.</p>
              </div>
            </body>
          </html>
        `,
                text: `
NEW CONCRETE LEVELING LEAD

Name: ${name}
Email: ${email}
Phone: ${phone}
ZIP Code: ${zipCode}
Concrete Type: ${Array.isArray(concreteTypes) ? concreteTypes.join(', ') : concreteTypes}
Timeline: ${timeline}
Source: ${referer}
Submitted: ${timestamp}

${timeline === 'asap' ? '⚡ URGENT: This lead needs service ASAP!' : ''}
        `,
            });

            console.log('✅ Email notification sent successfully');
        } catch (emailError) {
            console.error('❌ Email notification failed:', emailError);
            // Continue even if email fails - we still want to log the lead
        }

        // Log the lead (you can add database storage here later)
        console.log('📋 New Lead Received:', {
            name,
            email,
            phone,
            zipCode,
            concreteTypes,
            timeline,
            referer,
            timestamp,
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Lead received successfully',
                leadId: `LEAD-${Date.now()}`,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('❌ Error processing lead:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
