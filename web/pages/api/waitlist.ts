import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../lib/firebase-admin';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email } = req.body;

    // Basic validation
    if (!email || typeof email !== 'string') {
        return res.status(400).json({ message: 'Invalid email address' });
    }

    // Sanitize and validate email
    const sanitizedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(sanitizedEmail) || sanitizedEmail.length > 254) {
        return res.status(400).json({ message: 'Invalid email address' });
    }

    // Get IP address
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
        req.socket.remoteAddress ||
        'unknown';

    try {
        // Check for duplicate email
        const emailQuery = await db.collection('waitlist')
            .where('email', '==', sanitizedEmail)
            .limit(1)
            .get();

        if (!emailQuery.empty) {
            return res.status(409).json({ message: "You're already on the waitlist!" });
        }

        // Check IP submission count (rate limiting)
        const ipQuery = await db.collection('waitlist')
            .where('ip', '==', ip)
            .get();

        if (ipQuery.size >= 3) {
            return res.status(429).json({
                message: 'Maximum submissions reached from your location. Please contact us directly.'
            });
        }

        // Add to waitlist
        await db.collection('waitlist').add({
            email: sanitizedEmail,
            createdAt: new Date(),
            source: 'web_landing_api',
            ip: ip,
        });

        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
