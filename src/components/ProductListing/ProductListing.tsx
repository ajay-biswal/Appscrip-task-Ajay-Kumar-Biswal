import type { Product } from "@/types/product";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import InteractiveProductListing from "./InteractiveProductListing";
import styles from "./ProductListing.module.css";

interface ProductListingProps {
  products: Product[];
}

export default function ProductListing({
  products,
}: ProductListingProps) {
  return (
    <section className={styles.container}>
      <Breadcrumb />

      <div className={styles.hero}>
        <h1>DISCOVER OUR PRODUCTS</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere
          pellentesque adipiscing. Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      <InteractiveProductListing products={products} />
    </section>
  );
}