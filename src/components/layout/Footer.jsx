import { FaTwitter, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import React from "react";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
          <FaTwitter className={styles.socialList} />
          <FaInstagram className={styles.socialList} />
          <FaLinkedin className={styles.socialList} />
          <FaGithub className={styles.socialList} />
      </ul>
      <p>
        <span>Costs</span> &copy; 2022
      </p>
    </footer>
  );
}
