"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import Filters from "@/components/Filters/Filters";
import ProductGrid from "./ProductGrid";
import styles from "./ProductListing.module.css";

interface InteractiveProductListingProps {
  products: Product[];
}

type SortOption = "recommended" | "price-low" | "price-high" | "rating";

export default function InteractiveProductListing({
  products,
}: InteractiveProductListingProps) {
  const [sort, setSort] = useState<SortOption>("recommended");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  };

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) {
      return products;
    }

    return products.filter((product) =>
      selectedCategories.includes(product.category),
    );
  }, [products, selectedCategories]);

  const sortedProducts = useMemo(() => {
    const result = [...filteredProducts];

    switch (sort) {
      case "price-low":
        return result.sort((a, b) => a.price - b.price);

      case "price-high":
        return result.sort((a, b) => b.price - a.price);

      case "rating":
        return result.sort((a, b) => b.rating.rate - a.rating.rate);

      default:
        return result;
    }
  }, [filteredProducts, sort]);

  return (
    <>
      <div className={styles.toolbar}>
        <span className={styles.itemCount}>{sortedProducts.length} ITEMS</span>

        <button
          className={styles.filterButton}
          type="button"
          onClick={() => setShowFilters(true)}
        >
          FILTER
        </button>

        <label className={styles.sortControl}>
          <span className={styles.sortLabel}>SORT BY</span>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortOption)}
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="price-low">PRICE: LOW TO HIGH</option>
            <option value="price-high">PRICE: HIGH TO LOW</option>
            <option value="rating">TOP RATED</option>
          </select>
        </label>
      </div>

      <div className={styles.content}>
        <Filters
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />

        <div className={styles.products}>
          {sortedProducts.length > 0 ? (
            <ProductGrid products={sortedProducts} />
          ) : (
            <div className={styles.emptyState}>
              <h2>No products found</h2>
              <p>Try changing or removing your filters.</p>
            </div>
          )}
        </div>
      </div>

      {showFilters && (
        <div className={styles.mobileFilterOverlay}>
          <div className={styles.mobileFilterPanel}>
            <div className={styles.mobileFilterHeader}>
              <h2>FILTERS</h2>

              <button
                type="button"
                onClick={() => setShowFilters(false)}
                aria-label="Close filters"
              >
                ×
              </button>
            </div>

            <Filters
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />

            <button
              className={styles.applyButton}
              type="button"
              onClick={() => setShowFilters(false)}
            >
              APPLY
            </button>
          </div>
        </div>
      )}
    </>
  );
}
