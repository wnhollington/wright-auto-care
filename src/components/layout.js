import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

// Components
import TopBar from "./top-bar"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <script src="../assets/vendor/purecounter/purecounter.js" defer></script>
        <script src="../assets/vendor/aos/aos.js" defer></script>
        <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js" defer></script>
        <script src="../assets/vendor/glightbox/js/glightbox.min.js" defer></script>
        <script src="../assets/vendor/isotope-layout/isotope.pkgd.min.js" defer></script>
        <script src="../assets/vendor/swiper/swiper-bundle.min.js" defer></script>
        <script src="../assets/vendor/php-email-form/validate.js" defer></script>
        <script src="../assets/js/main.js" defer></script>
      </Helmet>
      <TopBar />
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
