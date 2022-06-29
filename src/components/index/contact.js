import * as React from "react"
import { useSiteMetadata } from "../../utilities/use-site-metadata"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

const About = () => {
  const siteMetaData = useSiteMetadata()
  return (
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>Contact Us</h2>
        </div>

        <div class="row">

          <div class="col-lg-6 d-flex">
            <div class="info-box">
              <i class="bx bx-calendar"></i>
              <h3>Schedule Service</h3>
              <Link to="/schedule-service"><Button class="btn btn-primary text-white">Schedule Now</Button></Link>
            </div>
          </div>

          <div class="col-lg-3 d-flex">
            <div class="info-box">
              <i class="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <a href={`mailto:${siteMetaData.contact.email}`}>{siteMetaData.contact.email}</a>
            </div>
          </div>

          <div class="col-lg-3 d-flex">
            <div class="info-box ">
              <i class="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>{siteMetaData.contact.phone}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About
