import * as React from "react"
import { useSiteMetadata } from "../utilities/use-site-metadata"

const Header = () => {
  const siteMetaData = useSiteMetadata()
  return (
    <header id="header" class="d-flex align-items-center">
      <div class="container d-flex align-items-center">

        <div class="logo me-auto">
          <h1><a href="index.html">{siteMetaData.title}</a></h1>
          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a> */}
        </div>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="#services">Services</a></li>
            <li><a class="nav-link scrollto" href="#portfolio">Faq</a></li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header
