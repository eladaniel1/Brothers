// Vercel serverless function. Delivers estimate and contact form posts.
// Requires RESEND_API_KEY and ESTIMATE_FROM_EMAIL (a sender Resend has
// verified for brothersremodelers.com). Without them the function returns
// 503 and does not pretend the lead was sent.

const TO = 'estimates@brothersremodelers.com';

const clean = (value, max = 2000) => String(value || '').replace(/\s+/g, ' ').trim().slice(0, max);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ ok: false, error: 'Use POST.' });
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const name = clean(body.name, 120);
    const email = clean(body.email, 180);
    const phone = clean(body.phone, 40);
    const message = clean(body.message, 4000);
    if (!name || !email || !phone) {
        return res.status(400).json({ ok: false, error: 'Name, email, and phone are required.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ ok: false, error: 'Enter a valid email address.' });
    }

    const key = process.env.RESEND_API_KEY;
    const from = process.env.ESTIMATE_FROM_EMAIL;
    if (!key || !from) {
        return res.status(503).json({
            ok: false,
            error: 'Email delivery is not configured. Set RESEND_API_KEY and ESTIMATE_FROM_EMAIL.',
        });
    }

    const lines = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `ZIP or city: ${clean(body.city, 80)}`,
        `Project: ${clean(body.service, 120)}`,
        `Timing: ${clean(body.timeline, 80)}`,
        `Financing: ${clean(body.budget, 80)}`,
        `Page: ${clean(body.source_page, 180)}`,
        '',
        message || '(no details)',
    ];

    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${key}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from,
            to: [TO],
            reply_to: email,
            subject: `Estimate request from ${name}`,
            text: lines.join('\n'),
        }),
    });

    if (!response.ok) {
        return res.status(502).json({ ok: false, error: 'The message could not be sent. Please call us.' });
    }
    return res.status(200).json({ ok: true });
}
