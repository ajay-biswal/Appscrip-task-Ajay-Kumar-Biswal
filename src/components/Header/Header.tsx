import Link from "next/link";
import styles from "./Header.module.css";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 8h14l-1 13H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <button
          className={styles.menuButton}
          type="button"
          aria-label="Open navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <Link href="/" className={styles.logo}>
          LOGO
        </Link>

        <nav className={styles.navigation} aria-label="Main navigation">
          <Link href="/">SHOP</Link>
          <Link href="/">SKILLS</Link>
          <Link href="/">STORIES</Link>
          <Link href="/">ABOUT</Link>
          <Link href="/">CONTACT US</Link>
        </nav>

        <div className={styles.actions}>
          <button type="button" aria-label="Search">
            <SearchIcon />
          </button>

          <button type="button" aria-label="Wishlist">
            <HeartIcon />
          </button>

          <button type="button" aria-label="Shopping bag">
            <BagIcon />
          </button>

          <button
            className={styles.accountButton}
            type="button"
            aria-label="Account"
          >
            <UserIcon />
          </button>
        </div>
      </div>
    </header>
  );
}