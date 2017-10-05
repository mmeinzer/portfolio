import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"

import Navigation from "../components/Navigation"

import styles from "./index.module.css"

export default () => (
  <div>
    <Helmet title="Matt Meinzer | Portfolio" />
    <div className={styles.topBar}></div>
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <h1><Link to={"/"}>Matt Meinzer</Link></h1>
          <Navigation />
        </div>
      </div>
    </div>
  </div>
)
