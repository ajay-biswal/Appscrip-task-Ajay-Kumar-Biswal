import Link from "next/link";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb() {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <Link href="/">HOME</Link>
      <span>/</span>
      <span>SHOP</span>
    </nav>
  );
}