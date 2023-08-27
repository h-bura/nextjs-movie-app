import React from "react";
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";
import styles from "./styles.module.css";
import Link from "next/link";
function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.link} href="#!" target="blank">
        <FiTwitter />
      </Link>
      <Link className={styles.link} href="#!" target="blank">
        <FiFacebook />
      </Link>
      <Link href="#!" target="blank">
        <FiLinkedin />
      </Link>
    </footer>
  );
}
export default Footer;
