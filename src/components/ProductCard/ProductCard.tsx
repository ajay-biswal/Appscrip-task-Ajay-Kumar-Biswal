import Image from "next/image";
import type { Product } from "@/types/product";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={styles.image}
        />

        <button
          className={styles.favorite}
          type="button"
          aria-label={`Add ${product.title} to wishlist`}
        >
          ♡
        </button>
      </div>

      <div className={styles.details}>
        <h2>{product.title}</h2>

        <p className={styles.loginText}>
          Sign in to see price
        </p>
      </div>
    </article>
  );
}