import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          <FaPlayCircle />
          TMDB-FILMS
        </Link>
        <div>
          <input className={styles.searchInput} placeholder="Search..." />
        </div>
      </div>
    </header>
  );
}

export default Header;
