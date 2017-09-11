import React from "react"
import Link from "gatsby-link"
import styles from "./Navigation.module.css"

export default () => (
  <nav className={styles.navBar}>
    <ul>
      <li><Link to={"#about"}>About</Link></li>
      <li><Link to={"#portfolio"}>Portfolio</Link></li>
      <li><Link to={"#contact"}>Contact</Link></li>
    </ul>
  </nav>
)
