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

    try {
        await db.collection('waitlist').add({
            email: sanitizedEmail,
            createdAt: new Date(),
            source: 'web_landing_api',
            ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        });

        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
