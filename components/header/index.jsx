"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/?search=${searchTerm}`);
    setSearchTerm("");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          <FaPlayCircle />
          TMDB-FILMS
        </Link>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              value={searchTerm}
              onChange={handleOnChange}
              className={styles.searchInput}
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
