import React from "react";
import Skeleton from "@/components/skeleton";
import styles from "./styles.module.css";

function CategoriesLoading() {
  return (
    <div className={styles.categories}>
      {Array(19)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={45} width={72} />
        ))}
    </div>
  );
}

export default CategoriesLoading;
