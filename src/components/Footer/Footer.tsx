import styles from "./Footer.module.css";

const companyLinks = [
  "About Us",
  "Stories",
  "Artisans",
  "Boutiques",
  "Contact Us",
  "EU Compliances Docs",
];

const quickLinks = [
  "Orders & Shipping",
  "Join/Login as a Seller",
  "Payment & Pricing",
  "Return & Refunds",
  "FAQs",
  "Privacy Policy",
  "Terms & Conditions",
];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.socialIcon}
    >
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="0.8" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.socialIcon}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 10v6" />
      <path d="M8 7.5v.01" />
      <path d="M12 16v-3.2a2.8 2.8 0 0 1 5.6 0V16" />
      <path d="M12 10v6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* -----------------------------
          Top section
      ----------------------------- */}

      <div className={styles.topSection}>
        {/* Newsletter */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterText}>
            <h2>BE THE FIRST TO KNOW</h2>

            <p>Sign up for updates from mettà muse.</p>
          </div>

          <form className={styles.form}>
            <label htmlFor="footer-email" className={styles.srOnly}>
              Email address
            </label>

            <input
              id="footer-email"
              name="email"
              type="email"
              placeholder="Enter your e-mail..."
              required
            />

            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        {/* Contact + Currency */}
        <div className={styles.contact}>
          <div>
            <h3>CONTACT US</h3>

            <p>+44 221 133 5360</p>

            <p>customercare@mettamuse.com</p>
          </div>

          <div className={styles.currency}>
            <h3>CURRENCY</h3>

            <button
              type="button"
              className={styles.currencyButton}
              aria-label="Selected currency: USD"
            >
              <span className={styles.flag}>🇺🇸</span>
              <span>USD</span>
            </button>

            <p>
              Transactions will be completed in Euros and a currency
              reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      {/* -----------------------------
          Divider
      ----------------------------- */}

      <div className={styles.divider} />

      {/* -----------------------------
          Main footer content
      ----------------------------- */}

      <div className={styles.footerContent}>
        {/* Company */}
        <div className={styles.company}>
          <h3>mettà muse</h3>

          {companyLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h3>QUICK LINKS</h3>

          {quickLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </div>

        {/* Social + Payments */}
        <div className={styles.rightSection}>
          <div className={styles.socialSection}>
            <h3>FOLLOW US</h3>

            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>

              <a href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className={styles.paymentSection}>
            <h3>mettà muse ACCEPTS</h3>

            <div className={styles.paymentMethods}>
              <span className={styles.payment}>G Pay</span>
              <span className={styles.payment}>●●</span>
              <span className={styles.payment}>P</span>
              <span className={styles.payment}>AMEX</span>
              <span className={styles.payment}>Pay</span>
              <span className={styles.payment}>O Pay</span>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------------
          Copyright
      ----------------------------- */}

      <div className={styles.bottom}>
        <p>Copyright © 2023 mettà muse. All rights reserved.</p>
      </div>
    </footer>
  );
}