"use client";

import styles from "./Filters.module.css";

interface FiltersProps {
  selectedCategories?: string[];
  onCategoryChange?: (category: string) => void;
}

const categories = [
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
];

const otherFilters = [
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
];

export default function Filters({
  selectedCategories = [],
  onCategoryChange,
}: FiltersProps) {
  return (
    <aside className={styles.sidebar}>
      <label className={styles.customizable}>
        <input type="checkbox" />
        <span>CUSTOMIZABLE</span>
      </label>

      <details className={styles.filter} open>
        <summary>
          <span>IDEAL FOR</span>
          <span className={styles.chevron}>⌃</span>
        </summary>

        <div className={styles.options}>
          {["Men", "Women", "Kids"].map((option) => (
            <label key={option}>
              <input type="checkbox" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </details>

      <details className={styles.filter}>
        <summary>
          <span>CATEGORY</span>
          <span className={styles.chevron}>⌄</span>
        </summary>

        <div className={styles.options}>
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange?.(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </details>

      {otherFilters.map((filter) => (
        <details key={filter} className={styles.filter}>
          <summary>
            <span>{filter}</span>
            <span className={styles.chevron}>⌄</span>
          </summary>
        </details>
      ))}
    </aside>
  );
}