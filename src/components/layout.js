import * as React from 'react'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navImage
} from './layout.module.css'
import { Link, useStaticQuery, graphql } from 'gatsby'
import homeButton from '../images/homeIcon.png'
import aboutButton from '../images/aboutIcon.png'
import blogButton from '../images/blogIcon.png'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <h1 className={heading}>{pageTitle}</h1>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              <img className={navImage} src={homeButton} alt="Home" />
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              <img className={navImage} src={aboutButton} alt="About" />
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
            <img className={navImage} src={blogButton} alt="Blog" />
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout