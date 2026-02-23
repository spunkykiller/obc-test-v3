import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, email, phone, workspace } = body;

        // TODO: Replace with actual Google Sheets API endpoint or Zapier Webhook
        const GOOGLE_SHEETS_ENDPOINT = process.env.GOOGLE_SHEETS_URL || 'https://hooks.zapier.com/hooks/catch/fake/fake';

        const response = await fetch(GOOGLE_SHEETS_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: new Date().toISOString(),
                fullName,
                email,
                phone,
                workspace,
                source: 'Website V2 Modal',
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit to CRM');
        }

        return NextResponse.json({ success: true, message: 'Lead captured successfully' });
    } catch (error) {
        console.error('Submission Error:', error);
        return NextResponse.json({ success: false, message: 'Error submitting form' }, { status: 500 });
    }
}
