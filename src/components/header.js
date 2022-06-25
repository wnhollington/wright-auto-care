import * as React from "react"
import { useSiteMetadata } from "../utilities/use-site-metadata"
import Logo from '../images/svg/logo.svg'

const Header = () => {
  const siteMetaData = useSiteMetadata()
  return (
    <header id="header" class="d-flex align-items-center">
      <div class="container d-flex align-items-center">

        <div class="logo d-flex align-items-center me-auto">
          <Logo style={{height: 75, width: 75}}/>
          <h1><a href="index.html">{siteMetaData.title}</a></h1>
        </div>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link" href="#hero">Home</a></li>
            <li><a class="nav-link" href="#about">About</a></li>
            <li><a class="nav-link" href="#services">Services</a></li>
            <li><a class="nav-link" href="#faq">Faq</a></li>
            <li><a class="nav-link" href="#pricing">Pricing</a></li>
            <li><a class="nav-link" href="#contact">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header
