import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/index/hero"
import About from "../components/index/about"
import AboutLists from "../components/index/about-lists"
import Counts from "../components/index/counts"
import Services from "../components/index/services"
import Portfolio from "../components/index/portfolio"
import Team from "../components/index/team"
import Faq from "../components/index/faq"
import Contact from "../components/index/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <main id="main">
      <About/>
      <AboutLists/>
      <Counts/>
      <Services/>
      <Portfolio/>
      <Team/>
      <Faq/>
      <Contact/>
    </main>
  </Layout>
)

export default IndexPage
