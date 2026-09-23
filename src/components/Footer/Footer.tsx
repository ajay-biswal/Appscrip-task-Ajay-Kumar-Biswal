import styles from "./Footer.module.css";

const footerSections = [
  {
    title: "QUICK LINKS",
    links: ["Orders & Shipping", "Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "FOLLOW US",
    links: ["Instagram", "Facebook", "LinkedIn"],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <div className={styles.newsletterText}>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from METTA MUSE.</p>
        </div>

        <form className={styles.form}>
          <label htmlFor="email" className={styles.srOnly}>
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your e-mail..."
            required
          />

          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>

      <div className={styles.footerContent}>
        <div className={styles.company}>
          <h3>METTA MUSE</h3>
          <p>
            About Us
          </p>
          <p>
            Contact Us
          </p>
          <p>
            Stories
          </p>
        </div>

        {footerSections.map((section) => (
          <div key={section.title} className={styles.section}>
            <h3>{section.title}</h3>

            {section.links.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <p>© 2026 METTA MUSE. All rights reserved.</p>
      </div>
    </footer>
  );
}