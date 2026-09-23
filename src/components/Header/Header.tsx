import Link from "next/link";
import styles from "./Header.module.css";

function BrandMark() {
  return (
    <svg
      className={styles.brandMark}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2.5c2.2 3.2 4.3 4.8 7.5 5.7-1.1 2.2-1.1 4.2 0 6.4-3.2.9-5.3 2.5-7.5 5.7-2.2-3.2-4.3-4.8-7.5-5.7 1.1-2.2 1.1-4.2 0-6.4C7.7 7.3 9.8 5.7 12 2.5Z" />
      <path d="M7 7c2.8 1.2 5 3.2 5 5s-2.2 3.8-5 5" />
      <path d="M17 7c-2.8 1.2-5 3.2-5 5s2.2 3.8 5 5" />
    </svg>
  );
}

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

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Mobile announcement bar */}
      <div className={styles.announcement}>
        <BrandMark />
        <span>Lorem ipsum dolor</span>
      </div>

      {/* Main header row */}
      <div className={styles.topRow}>
        <div className={styles.leftSection}>
          <button
            className={styles.menuButton}
            type="button"
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </button>

          <Link
            href="/"
            className={styles.desktopBrandMark}
            aria-label="Home"
          >
            <BrandMark />
          </Link>
        </div>

        <Link href="/" className={styles.logo}>
          LOGO
        </Link>

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

      {/* Desktop navigation */}
      <nav
        className={styles.navigation}
        aria-label="Main navigation"
      >
        <Link href="/">SHOP</Link>
        <Link href="/">SKILLS</Link>
        <Link href="/">STORIES</Link>
        <Link href="/">ABOUT</Link>
        <Link href="/">CONTACT US</Link>
      </nav>
    </header>
  );
}