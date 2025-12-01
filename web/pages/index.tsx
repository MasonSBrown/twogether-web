import Head from 'next/head'
import styles from '../styles/landing.module.css'
import WaitlistForm from '../components/WaitlistForm'

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Twogether — Join the Waitlist</title>
        <meta name="description" content="Always just a heartbeat away. Join the waitlist for the intimate home-screen widget app for couples." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.container}>
        <div className={styles.splitLayout}>
          {/* Left Column: Content */}
          <div className={styles.contentColumn}>
            <div className={styles.logo}>
              <img src="/favicon.png" alt="Twogether Logo" width={48} height={48} />
              <span className={styles.brandName}>Twogether</span>
            </div>

            <h1 className={styles.headline}>
              Stay close,<br />
              even when you’re<br />
              miles apart.
            </h1>

            <p className={styles.subheadline}>
              Send love notes, photos, and live distance updates through intimate home‑screen widgets designed for couples.
            </p>

            <div className={styles.waitlistContainer}>
              <WaitlistForm />
            </div>

            <div className={styles.socialProof}>
              <p>Follow us for updates</p>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                @jointwogether <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className={styles.visualColumn}>
            <div className={styles.phoneWrapper}>
              <img
                src="/app-screenshot.png"
                alt="Twogether App Screenshot"
                className={styles.appScreenshot}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

