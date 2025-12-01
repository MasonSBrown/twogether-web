const admin = require('firebase-admin');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Check for Brevo API Key
const BREVO_API_KEY = process.env.BREVO_API_KEY;
if (!BREVO_API_KEY) {
    console.error('Error: BREVO_API_KEY is missing in .env.local');
    process.exit(1);
}

// Initialize Firebase Admin
// NOTE: This requires a service account key file to be present.
// We'll check for GOOGLE_APPLICATION_CREDENTIALS or a specific file.
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.warn('Warning: GOOGLE_APPLICATION_CREDENTIALS not set.');
    console.warn('To run this script, you need a Firebase Service Account Key.');
    console.warn('1. Go to Firebase Console -> Project Settings -> Service accounts.');
    console.warn('2. Generate new private key.');
    console.warn('3. Save it as "service-account.json" in the "web" folder.');
    console.warn('4. Run: export GOOGLE_APPLICATION_CREDENTIALS="./service-account.json" && node scripts/sync-brevo.js');

    // Try to load from default location for convenience
    try {
        const serviceAccount = require('../service-account.json');
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    } catch (e) {
        console.error('Could not load ../service-account.json. Please follow instructions above.');
        process.exit(1);
    }
} else {
    admin.initializeApp();
}

const db = admin.firestore();

async function syncEmails() {
    console.log('Starting sync...');

    try {
        const snapshot = await db.collection('waitlist').get();
        const emails = [];

        snapshot.forEach(doc => {
            const data = doc.data();
            if (data.email) {
                emails.push(data.email);
            }
        });

        console.log(`Found ${emails.length} emails in Firebase.`);

        // Sync to Brevo
        // Using fetch to avoid extra dependencies if possible, or just simple HTTP request
        // Brevo API: https://developers.brevo.com/reference/createcontact

        let successCount = 0;
        let failCount = 0;

        for (const email of emails) {
            try {
                const response = await fetch('https://api.brevo.com/v3/contacts', {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'api-key': BREVO_API_KEY,
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        updateEnabled: true, // Update if exists
                        listIds: [2] // Default list ID, usually 2 is the first custom list. User might need to change this.
                    })
                });

                if (response.ok) {
                    successCount++;
                } else {
                    const error = await response.json();
                    if (error.code === 'duplicate_parameter') {
                        // Already exists, count as success or ignore
                        successCount++;
                    } else {
                        console.error(`Failed to sync ${email}:`, error);
                        failCount++;
                    }
                }
            } catch (err) {
                console.error(`Error syncing ${email}:`, err);
                failCount++;
            }
        }

        console.log(`Sync complete. Success: ${successCount}, Failed: ${failCount}`);

    } catch (error) {
        console.error('Error fetching from Firebase:', error);
    }
}

syncEmails();
