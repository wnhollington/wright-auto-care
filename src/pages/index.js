import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/index/hero"
import About from "../components/index/about"
import Services from "../components/index/services"
import Faq from "../components/index/faq"
import Pricing from "../components/index/pricing"
import Testimonials from "../components/index/testimonials"
import Contact from "../components/index/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <main id="main">
      <About/>
      <Services/>
      <Faq/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
    </main>
  </Layout>
)

export default IndexPage
