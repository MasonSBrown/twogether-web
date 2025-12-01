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
        <link rel="icon" type="image/png" href="/TwogetherAppIcon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Marko+One&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.container}>
        <div className={styles.splitLayout}>
          {/* Left Column: Content */}
          <div className={styles.contentColumn}>
            <div className={styles.logo}>
              <img src="/TwogetherAppIcon.png" alt="Twogether Logo" width={48} height={48} className={styles.appIcon} />
              <span className={styles.brandName}>Twogether</span>
            </div>

            <h1 className={styles.headline}>
              Stay connected,<br />
              no matter the<br />
              distance.
            </h1>

            <p className={styles.subheadline}>
              Real-time photo widgets, interactive haptic nudges, and instant messaging—all within a shared homescreen.
            </p>

            <div className={styles.waitlistContainer}>
              <WaitlistForm />
            </div>

            <div className={styles.contact}>
              <a href="mailto:team@jointwogether.com">Contact us: team@jointwogether.com</a>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className={styles.visualColumn}>
            <div className={styles.phoneWrapper}>
              <img
                src="/twogetherdemo.png"
                alt="Twogether App Demo"
                className={styles.appScreenshot}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

