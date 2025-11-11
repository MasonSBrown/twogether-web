import Head from 'next/head'
import styles from '../styles/landing.module.css'

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'note':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 9h10M7 13h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    case 'distance':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
          <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'photo':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="9" cy="10" r="1.4" fill="currentColor" />
          <path d="M21 19l-5-5-4 4-3-3-4 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'milestone':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
          <path d="M12 2v20M5 8l7-6 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    default:
      return null
  }
}

export default function Home() {

  return (
    <div className={styles.page}>
      <Head>
        <title>Twogether — Always just a heartbeat away</title>
        <meta name="description" content="Always just a heartbeat away. Stay connected with your partner through intimate home-screen widgets: love notes, photos, distance updates, and shared moments." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.container}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.headline}>Stay close, even when you’re miles apart.</h1>
            <p className={styles.subheadline}>Send love notes, photos, and live distance updates through intimate home‑screen widgets designed for couples.</p>
            <div className={styles.heroCtas}>
              <a className={styles.ctaPrimary} href="https://apps.apple.com" target="_blank" rel="noopener">Download on the App Store</a>
              <a className={styles.ctaGhost} href="#features">Learn More</a>
            </div>
          </div>

          <div className={styles.heroMockup} aria-hidden>
            <div className={styles.phoneMockup}>
              <div className={styles.widgetPlaceholder}>
                <div className={styles.widgetTitle}>Love Note</div>
                <div className={styles.widgetBody}>Good morning — thinking of you ❤️</div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className={styles.howItWorks} id="how">
          <h2 className={styles.sectionTitle}>How it works</h2>
          <div className={styles.steps}>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>1</div>
              <h3>Create a private space</h3>
              <p>Invite your partner and start a tiny, private home just for the two of you.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>2</div>
              <h3>Add your favorite widgets</h3>
              <p>Choose from love notes, photos, distance, and days‑together widgets.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>3</div>
              <h3>Stay connected</h3>
              <p>See each other on your home screen — small reminders that matter.</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.features} id="features">
          <h2 className={styles.sectionTitle}>Feelings, not features</h2>
          <p className={styles.lead}>Widgets that make everyday moments sweeter.</p>
          <div className={styles.featureGrid}>
            <article className={styles.featureCard}>
              <div className={styles.iconWrap}><Icon name="note"/></div>
              <h4>Love Note Widget</h4>
              <p>Send short love notes that sit on your partner’s home screen — little surprises all day long.</p>
            </article>
            <article className={styles.featureCard}>
              <div className={styles.iconWrap}><Icon name="distance"/></div>
              <h4>Distance Widget</h4>
              <p>See how many miles are between you in a soft, gentle reminder of connection.</p>
            </article>
            <article className={styles.featureCard}>
              <div className={styles.iconWrap}><Icon name="milestone"/></div>
              <h4>Memory & Milestone Widget</h4>
              <p>Count days together, anniversaries and small victories that deserve a moment.</p>
            </article>
            <article className={styles.featureCard}>
              <div className={styles.iconWrap}><Icon name="photo"/></div>
              <h4>Photo Widget</h4>
              <p>Pin a favorite photo to your home screen — a tiny window to a shared memory.</p>
            </article>
          </div>
        </section>

        {/* Why Twogether */}
        <section className={styles.why}>
          <h2 className={styles.sectionTitle}>Built for real couples, not paywalls.</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}><strong>Fair pricing</strong><p>No heavy paywalls — what matters is the connection.</p></div>
            <div className={styles.whyItem}><strong>Widget-first</strong><p>Designed to live on your home screen where you actually see it.</p></div>
            <div className={styles.whyItem}><strong>Perfect for distance</strong><p>Small touches that make faraway feel a little closer.</p></div>
            <div className={styles.whyItem}><strong>Privacy-first</strong><p>Private spaces and minimal data — your moments stay between you two.</p></div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonials}>
          <h2 className={styles.sectionTitle}>Use cases</h2>
          <div className={styles.testGrid}>
            <blockquote className={styles.testimonial}>
              <p>“For long‑distance couples — seeing a note on my home screen always makes my day.”</p>
              <cite>— Alex, long‑distance</cite>
            </blockquote>
            <blockquote className={styles.testimonial}>
              <p>“We’re both busy parents — small photo reminders help us celebrate little wins.”</p>
              <cite>— Jordan & Sam</cite>
            </blockquote>
          </div>
        </section>

        {/* Pricing */}
        <section className={styles.pricing}>
          <h2 className={styles.sectionTitle}>Pricing</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <h3>Free</h3>
              <p className={styles.price}>$0</p>
              <ul>
                <li>Core widgets</li>
                <li>1 connected partner</li>
                <li>Basic customization</li>
              </ul>
              <a className={styles.ctaPrimary} href="#features">Start Free</a>
            </div>
            <div className={styles.priceCardAccent}>
              <h3>Twogether+</h3>
              <p className={styles.price}>More ways to show you care</p>
              <ul>
                <li>Extra widget sizes & styles</li>
                <li>More partners & sentimental features</li>
                <li>Priority support</li>
              </ul>
              <a className={styles.ctaPrimary} href="#features">Start Free</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faq}>
          <h2 className={styles.sectionTitle}>FAQ</h2>
          <div className={styles.faqGrid}>
            <div>
              <h4>Is my data private?</h4>
              <p>Yes — spaces are private and we only store what's necessary to show widgets to your partner.</p>
            </div>
            <div>
              <h4>Do both partners need iPhones?</h4>
              <p>Widgets are iOS-first today, but we'll share plans for broader compatibility.</p>
            </div>
            <div>
              <h4>Can we turn off widgets?</h4>
              <p>Yes — widgets are optional and can be removed at any time.</p>
            </div>
            <div>
              <h4>Will this drain battery?</h4>
              <p>Widgets are designed to be lightweight and update infrequently to preserve battery life.</p>
            </div>
          </div>
        </section>

        {/* Signup removed — email signup is handled inside the app */}

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.links}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
              <a href="mailto:support@jointwogether.com">Contact</a>
            </div>
            <div className={styles.copy}>support@jointwogether.com • Made with ❤️ by Twogether</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

