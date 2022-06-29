import * as React from "react"
import { useSiteMetadata } from "../utilities/use-site-metadata"
import Logo from '../images/svg/logo.svg'
import { Link } from "gatsby"

const Header = () => {
  const siteMetaData = useSiteMetadata()
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center">

        <div className="logo d-flex align-items-center me-auto">
          <Logo style={{height: 75, width: 75}}/>
          <h1><Link href="/">{siteMetaData.title}</Link></h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li><Link className="nav-link" href="/">Home</Link></li>
            <li><Link className="nav-link" href="/#about">About</Link></li>
            <li><Link className="nav-link" href="/#services">Services</Link></li>
            <li><Link className="nav-link" href="/#faq">Faq</Link></li>
            <li><Link className="nav-link" href="/#pricing">Pricing</Link></li>
            <li><Link className="nav-link" href="/#contact">Contact</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header
