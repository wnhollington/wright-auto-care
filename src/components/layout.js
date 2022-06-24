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
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i,900" rel="stylesheet"></link>
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
