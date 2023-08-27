import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Categories({ categories }) {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <div className={styles.categoryWrapper} key={category.id}>
          <Link className={styles.category} href={`/${category.id}`}>
            <div className={styles.name}>{category.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Categories;
