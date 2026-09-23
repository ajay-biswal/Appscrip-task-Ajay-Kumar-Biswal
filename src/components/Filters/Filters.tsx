"use client";

import styles from "./Filters.module.css";



const otherFilters = [
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

export default function Filters() {
  return (
    <aside className={styles.sidebar}>
      <label className={styles.customizable}>
        <input type="checkbox" />
        <span>CUSTOMIZABLE</span>
      </label>

      <details className={styles.filter} open>
        <summary>
          <span>IDEAL FOR</span>
          <span className={styles.chevron} />
        </summary>

        <div className={styles.options}>
          <label className={styles.allOption}>
            <span>Unselect all</span>
          </label>

          {["Men", "Women", "Baby & Kids"].map((option) => (
            <label key={option}>
              <input type="checkbox" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </details>

      {otherFilters.map((filter) => (
        <details key={filter} className={styles.filter}>
          <summary>
            <span>{filter}</span>
            <span className={styles.chevron} />
          </summary>
        </details>
      ))}
    </aside>
  );
}