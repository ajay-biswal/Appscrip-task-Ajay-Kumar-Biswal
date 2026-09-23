"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Product } from "@/types/product";
import Filters from "@/components/Filters/Filters";
import ProductGrid from "./ProductGrid";
import styles from "./ProductListing.module.css";

interface InteractiveProductListingProps {
  products: Product[];
}

type SortOption =
  | "recommended"
  | "price-low"
  | "price-high"
  | "rating";

export default function InteractiveProductListing({
  products,
}: InteractiveProductListingProps) {
  const [sort, setSort] =
    useState<SortOption>("recommended");

  // Desktop sidebar state
  const [showDesktopFilters, setShowDesktopFilters] =
    useState(true);

  // Mobile filter drawer state
  const [showMobileFilters, setShowMobileFilters] =
    useState(false);

  // Custom sort dropdown state
  const [showSortMenu, setShowSortMenu] =
    useState(false);

  const sortMenuRef = useRef<HTMLDivElement>(null);

  /*
   * Close the sort dropdown when clicking outside it.
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortMenuRef.current &&
        !sortMenuRef.current.contains(
          event.target as Node,
        )
      ) {
        setShowSortMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, []);

  /*
   * Sort products according to the selected option.
   */
  const sortedProducts = useMemo(() => {
    const result = [...products];

    switch (sort) {
      case "price-low":
        return result.sort(
          (a, b) => a.price - b.price,
        );

      case "price-high":
        return result.sort(
          (a, b) => b.price - a.price,
        );

      case "rating":
        return result.sort(
          (a, b) => b.rating.rate - a.rating.rate,
        );

      case "recommended":
      default:
        return result;
    }
  }, [products, sort]);

  /*
   * Get the currently selected sort label.
   */
  const sortLabel = useMemo(() => {
    switch (sort) {
      case "price-low":
        return "PRICE: LOW TO HIGH";

      case "price-high":
        return "PRICE: HIGH TO LOW";

      case "rating":
        return "TOP RATED";

      case "recommended":
      default:
        return "RECOMMENDED";
    }
  }, [sort]);

  return (
    <>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <span className={styles.itemCount}>
          {sortedProducts.length} ITEMS
        </span>

        {/* Desktop filter toggle */}
        <button
          className={styles.desktopFilterButton}
          type="button"
          onClick={() =>
            setShowDesktopFilters(
              (current) => !current,
            )
          }
        >
          {showDesktopFilters
            ? "HIDE FILTER"
            : "SHOW FILTER"}
        </button>

        {/* Mobile filter button */}
        <button
          className={styles.mobileFilterButton}
          type="button"
          onClick={() =>
            setShowMobileFilters(true)
          }
        >
          FILTER
        </button>

        {/* Custom sort dropdown */}
        <div
          className={styles.sortDropdown}
          ref={sortMenuRef}
        >
          <button
            type="button"
            className={styles.sortTrigger}
            onClick={() =>
              setShowSortMenu(
                (current) => !current,
              )
            }
            aria-expanded={showSortMenu}
            aria-haspopup="listbox"
          >
            <span>{sortLabel}</span>

            <span
              className={styles.sortChevron}
            />
          </button>

          {showSortMenu && (
            <div
              className={styles.sortMenu}
              role="listbox"
              aria-label="Sort products"
            >
              <button
                type="button"
                className={
                  sort === "recommended"
                    ? styles.active
                    : ""
                }
                onClick={() => {
                  setSort("recommended");
                  setShowSortMenu(false);
                }}
              >
                <span>RECOMMENDED</span>

                {sort === "recommended" && (
                  <span aria-hidden="true">
                    ✓
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  // Newest-first sorting will be
                  // implemented once the product
                  // data contains a creation date.
                  setShowSortMenu(false);
                }}
              >
                NEWEST FIRST
              </button>

              <button
                type="button"
                onClick={() => {
                  // Popular sorting will be
                  // implemented using product
                  // popularity data.
                  setShowSortMenu(false);
                }}
              >
                POPULAR
              </button>

              <button
                type="button"
                className={
                  sort === "price-high"
                    ? styles.active
                    : ""
                }
                onClick={() => {
                  setSort("price-high");
                  setShowSortMenu(false);
                }}
              >
                <span>PRICE: HIGH TO LOW</span>

                {sort === "price-high" && (
                  <span aria-hidden="true">
                    ✓
                  </span>
                )}
              </button>

              <button
                type="button"
                className={
                  sort === "price-low"
                    ? styles.active
                    : ""
                }
                onClick={() => {
                  setSort("price-low");
                  setShowSortMenu(false);
                }}
              >
                <span>PRICE: LOW TO HIGH</span>

                {sort === "price-low" && (
                  <span aria-hidden="true">
                    ✓
                  </span>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product listing */}
      <div
        className={`${styles.content} ${
          !showDesktopFilters
            ? styles.filtersHidden
            : ""
        }`}
      >
        {showDesktopFilters && <Filters />}

        <div className={styles.products}>
          {sortedProducts.length > 0 ? (
            <ProductGrid
              products={sortedProducts}
            />
          ) : (
            <div className={styles.emptyState}>
              <h2>No products found</h2>

              <p>
                Try changing or removing your
                filters.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {showMobileFilters && (
        <div
          className={
            styles.mobileFilterOverlay
          }
        >
          <div
            className={
              styles.mobileFilterPanel
            }
          >
            <div
              className={
                styles.mobileFilterHeader
              }
            >
              <h2>FILTERS</h2>

              <button
                type="button"
                onClick={() =>
                  setShowMobileFilters(false)
                }
                aria-label="Close filters"
              >
                ×
              </button>
            </div>

            <Filters />

            <button
              className={styles.applyButton}
              type="button"
              onClick={() =>
                setShowMobileFilters(false)
              }
            >
              APPLY
            </button>
          </div>
        </div>
      )}
    </>
  );
}