import { useState } from 'react';
import styles from '../styles/WaitlistForm.module.css';

export default function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Submission failed');
            }

            setStatus('success');
            setMessage("You're on the list! We'll be in touch soon.");
            setEmail('');
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={styles.input}
                    disabled={status === 'loading' || status === 'success'}
                />
                <button
                    type="submit"
                    className={styles.button}
                    disabled={status === 'loading' || status === 'success'}
                >
                    {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join Waitlist'}
                </button>
            </div>
            {message && (
                <p className={`${styles.message} ${status === 'error' ? styles.error : styles.success}`}>
                    {message}
                </p>
            )}
        </form>
    );
}
