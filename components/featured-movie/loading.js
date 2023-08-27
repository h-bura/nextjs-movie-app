import React from "react";
import styles from "@/components/loading";
import Loading from "@/components/loading";
function FeatureMovieLoading() {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Loading />
    </div>
  );
}

export default FeatureMovieLoading;
